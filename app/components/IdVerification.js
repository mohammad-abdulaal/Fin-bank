import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./AppButton";
import axios from "axios";
export default function IdVerification({ handleSetIdImage }) {
  const cameraAccessPermission = async () => {
    const response = await ImagePicker.requestCameraPermissionsAsync();
    if (!response.granted)
      alert("You must accept the camera access to scan your id");
  };

  useEffect(() => {
    cameraAccessPermission();
  }, []);


  const handleApi = async (imageUploaded) =>{
    console.log("here");
    const res = await axios.post("https://content-vision.googleapis.com/v1/images:annotate?key=AIzaSyAxEFPM_LFoRq5x0FU9w6x8mcXuVBqPN7A",
      {
        requests: [
          {
            features: [
              {
                type: "TEXT_DETECTION",
                maxResults:20,
              }
            ],
            image: {
              content: imageUploaded,
            }
          }
        ]

      }
    );

      console.log(res.data.responses[0].fullTextAnnotation.text)
  }

  const onCameraCapture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.2,
      base64: true,
    });
    console.log(result)
    handleApi(result.base64);
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
