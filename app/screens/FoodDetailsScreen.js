import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

const { width, height } = Dimensions.get("window");

function FoodDetailsScreen(props) {
  const item = props.route.params;
  let color = { color: "gray" };
  let type = "Sonstiges";
  if (item.category) {
    let category = item.category.toLowerCase();
    console.log(item.category.toLowerCase());

    const protein = ["fleisch", "wurst", "fett", "fisch"];
    const kohlen = ["gemüse", "frücht", "getrei", "brot"];
    const fett = ["milch", "fett", "nüsse", "öl"];

    const proteinTest = protein.some((el) => category.includes(el));
    const kohlenTest = kohlen.some((el) => category.includes(el));
    const fettTest = fett.some((el) => category.includes(el));

    if (proteinTest) color.color = "red";
    if (kohlenTest) color.color = "#17B521";
    if (fettTest) color.color = "#C8CC0E";

    switch (color.color) {
      case "red":
        type = "Protein";
        break;
      case "#17B521":
        type = "Kohlenhydrate";
        break;
      case "#C8CC0E":
        type = "Fett";
        break;

      default:
        break;
    }
  }

  return (
    <Screen>
      <View style={styles.upperContainer}>
        <View style={styles.containerTitle}>
          <AppText font="bold" style={styles.title}>
            {item.title}
          </AppText>
          <AppText style={[styles.tag, { backgroundColor: color.color }]}>
            {type}
          </AppText>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35,
  },
  tag: {
    position: "absolute",
    right: -10,
    top: -5,
    borderRadius: 4,
    overflow: "hidden",
    padding: 5,
    fontSize: 15,
  },
  text: { color: "white" },
  title: { fontSize: 22, textAlign: "center" },
  containerTitle: {
    backgroundColor: "#252634",
    height: height * 0.2,
    width: width * 0.7,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default FoodDetailsScreen;
