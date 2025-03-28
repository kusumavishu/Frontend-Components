import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const NativeMaps = () => {
  // npx expo install expo-location
  // npm i react-native-maps

  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log("location", location);
      setLocation(location);

      // Reverse Geocoding to get city name
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        // console.log("reverseGeocode[0].city", reverseGeocode[0].city);
        setCity(reverseGeocode[0].city || "City not found");
      }

      //LocationGeocodedAddress
      // let locationAddress = await Location.getProviderStatusAsync({});
      let locationAddress = await Location.hasServicesEnabledAsync({});

      console.log("loctionAddress>>", locationAddress);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting..!";
  if (errorMsg) {
    text = errorMsg;
  } else if (city) {
    text = JSON.stringify(city);
  }

  return (
    <View style={styles.container}>
      <Text>Your current location :</Text>
      <Text style={styles.paragraph}>{text}</Text>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
        </MapView>
      )}
    </View>
  );
};

export default NativeMaps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: 300,
    marginTop: 10,
  },
});
