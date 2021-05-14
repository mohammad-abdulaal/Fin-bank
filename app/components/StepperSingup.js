import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function StepperSingup({ stepperArray, currentStep }) {
  const displayStepper = (index) => {
    if (index < currentStep) {
      return (
        <Ionicons name="md-checkmark" size={20} color="#fff" key={index} />
      );
    }
    if (index >= currentStep) {
      return (
        <Text style={styles.circleContent} key={index + 1}>
          {index + 1}
        </Text>
      );
    }
  };
  const dispalyColor = (index) => {
    if (index < currentStep) return "#0faf9a";
    if (index == currentStep) return colors.lightBlue;
    if (index > currentStep) return "white";
  };
  return (
    <>
      <View style={styles.container}>
        {stepperArray.map((value, index) => {
          return (
            <>
              <View style={styles.stepperNodes}>
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor: dispalyColor(index),
                      borderColor: dispalyColor(index),
                    },
                  ]}
                  key={index}
                >
                  {displayStepper(index)}
                </View>
                <Text>{value}</Text>
              </View>
            </>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 100,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 15,
    marginBottom: 10,
  },
  circleContent: { fontSize: 15, color: "black" },
  stepperNodes: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
