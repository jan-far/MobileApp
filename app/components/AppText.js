import React from "react";
import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";

import defaultStyles from "../config/styles";

import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

function AppText({
  children,
  style,
  font = "normal",
  fontSize = 18,
  ...otherProps
}) {
  let [fontsLoaded] = useFonts({
    light: Lato_300Light,
    normal: Lato_400Regular,
    bold: Lato_700Bold,
    extraBold: Lato_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Text
      style={[{ color: "white", fontFamily: font, fontSize: 18 }, style]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default React.memo(AppText);
