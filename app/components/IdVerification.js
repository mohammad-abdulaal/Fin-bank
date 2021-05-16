import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./AppButton";

export default function IdVerification({ handleSetIdImage }) {
  const cameraAccessPermission = async () => {
    const response = await ImagePicker.requestCameraPermissionsAsync();
    if (!response.granted)
      alert("You must accept the camera access to scan your id");
  };

  useEffect(() => {
    cameraAccessPermission();
  }, []);

  const onCameraCapture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.6,
      base64: true,
    });
    handleSetIdImage(result.uri);
  };

  return (
    <View>
      <AppButton
        onPress={onCameraCapture}
        style={styles.button}
        title="Scan Your ID"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
});
