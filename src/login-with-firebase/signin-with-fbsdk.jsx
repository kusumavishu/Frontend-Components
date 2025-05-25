import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import {
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  signInWithCredential,
} from "@react-native-firebase/auth";

import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { auth } from "../../firebaseConfig";

const SignInWithFBSDK = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onFacebookButtonPress() {
    try {
      console.log("Facebook button pressed");

      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);

      console.log("Login result:", result);

      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = FacebookAuthProvider.credential(
        data.accessToken
      );

      // Sign-in the user with the credential
      const Allresult = await signInWithCredential(auth, facebookCredential);

      console.log("Signed in with Facebook!", Allresult);
    } catch (error) {
      console.log("Error during Facebook sign-in:", error);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth); // Firebase sign out
      setUser(null);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  if (initializing) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      {user ? (
        <>
          <Text>Welcome, {user.displayName || user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <>
          <Text>Please sign in</Text>
          <Button
            title="Facebook Sign-In"
            onPress={() =>
              onFacebookButtonPress().then(() =>
                console.log("Signed in with Facebook!")
              )
            }
          />
        </>
      )}
    </View>
  );
};

export default SignInWithFBSDK;

const styles = StyleSheet.create({});
