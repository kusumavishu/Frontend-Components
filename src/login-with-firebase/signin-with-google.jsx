import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut as firebaseSignOut,
} from "@react-native-firebase/auth";

const SigninWithGoogle = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      "932269768116-lpbnda0i5p6ivjvci2e3tu9metvfuf83.apps.googleusercontent.com",

    scopes: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });

  // Handle user state changes
  function handleAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

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
    return signInWithCredential(getAuth(), facebookCredential);
  }

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();

    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;

    if (!idToken) {
      idToken = signInResult.idToken;
    }

    if (!idToken) {
      throw new Error("No ID token found");
    }

    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(
      signInResult.data.idToken
    );

    // Sign-in the user with the credential
    return signInWithCredential(getAuth(), googleCredential);
  }

  async function signOut() {
    try {
      await GoogleSignin.signOut(); // Google sign out
      await firebaseSignOut(getAuth()); // Firebase sign out
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
          <Text>Welcome, {user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <>
          <Text>Please sign in</Text>
          <Button
            title="Google Sign-In"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log("Signed in with Google!")
              )
            }
          />
          <View style={{ height: 10 }} />
          <Button
            title="Facebook Sign-In"

            // onPress={() =>
            //   onFacebookButtonPress().then(() =>
            //     console.log("Signed in with Facebook!")
            //   )
            // }
          />
        </>
      )}
    </View>
  );
};

export default SigninWithGoogle;

const styles = StyleSheet.create({});
