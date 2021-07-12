import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

function AnimatedScrollView({ children }) {
  return <ScrollView>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {},
});

export default AnimatedScrollView;
