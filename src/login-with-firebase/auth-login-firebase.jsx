import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth } from "@react-native-firebase/auth";
import { getApp } from "@react-native-firebase/app";

const AuthLoginFirebase = () => {
  const auth = getAuth(getApp());
  //Phase 1
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  //Phase 2
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("User state changed:", user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  if (initializing) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!initializing && user) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Welcome, {user.email}</Text>
        <Button
          title="Sign Out"
          onPress={() => {
            auth.signOut();
            console.log("User signed out");
          }}
        />
      </View>
    );
  }

  const signUp = async () => {
    try {
      setLoading(true);
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.error("Error signing up:", e);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 justify-center items-center"
      >
        <View className="w-full p-4">
          <Text className="text-2xl font-bold text-center mb-4">
            Single Tap Login
          </Text>
          <Text className="text-gray-600 text-center mb-4">
            Sign in with your email and password
          </Text>
          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Email</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Password</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter your password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View className="flex-row justify-between">
            <View className="w-1/2 pr-2">
              <Button title="Sign Up" onPress={signUp} />
            </View>
            <View className="w-1/2 pl-2">
              <Button title="Sign In" onPress={signIn} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthLoginFirebase;
