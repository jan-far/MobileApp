import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

function SonstigesScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Sonstiges Screen
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SonstigesScreen;
