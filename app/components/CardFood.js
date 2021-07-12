import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import AppText from "./AppText";

const { width } = Dimensions.get("window");

function CardFood({ title, style, onPress, kcal }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View>
          <AppText font="normal" style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText font="light" style={styles.subTitle}>
            1 Einheit (52g)
          </AppText>
        </View>
        <View>
          <AppText style={{ fontSize: 15 }} font="light">
            {kcal} kcal
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    width: width * 0.7,
  },
  subTitle: {
    fontSize: 15,
  },
});

export default CardFood;
