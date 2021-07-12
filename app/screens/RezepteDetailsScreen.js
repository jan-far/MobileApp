import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SectionList,
  Dimensions,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const Ingredients = ({ item, style }) => {
  let listZutaten = <AppText></AppText>;
  if (item.zutaten) {
    const zutaten = item.zutaten
      .split(",")
      .map((line) => line.trim().split("-"));

    listZutaten = zutaten.map((zutat, index) => {
      if (zutat.length > 1) {
        return (
          <View style={style} key={index}>
            <AppText style={{ width: 55 }}>{zutat[0]}</AppText>
            <AppText>{zutat[1]}</AppText>
          </View>
        );
      } else {
        return (
          <View style={style} key={index}>
            <AppText style={{ width: 55 }}></AppText>
            <AppText>{zutat[0]}</AppText>
          </View>
        );
      }
    });
  }
  return listZutaten;
};

function RezepteDetailsScreen({ route, navigation }) {
  const item = route.params;
  console.log(item);
  let tags = <AppText></AppText>;
  if (item.tags) {
    tags = item.tags.split(",").map((tag, index) => (
      <AppText style={styles.tags} key={index}>
        {tag.trim()}
      </AppText>
    ));
  }

  const onPress = (objet) => save();

  const [selectedLanguage, setSelectedLanguage] = useState("mittag");
  const [inputText, setinputText] = useState("");

  const save = async () => {
    try {
      await AsyncStorage.setItem("calories", inputText.toString());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={item.image} />

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{item.title}</AppText>
            <View style={styles.iconsGlobalContainer}>
              <View style={styles.iconsContainer}>
                <Image
                  style={styles.imageIcon}
                  source={require("../assets/Rezepte/timer.png")}
                />
                <AppText style={styles.iconText}>{item.dauer} Minuten</AppText>
              </View>
              <View style={styles.iconsContainer}>
                <Image
                  style={styles.imageIcon}
                  source={require("../assets/Rezepte/chef.png")}
                />
                <AppText style={styles.iconText}>{item.level}</AppText>
              </View>
            </View>
            <AppText style={styles.description}>{item.description}</AppText>
            <View style={styles.tagsContainer}>{tags}</View>
          </View>
          <View style={styles.containerFood}>
            <View style={styles.ingredientsHeader}>
              <View>
                <AppText style={{ fontWeight: "bold", fontSize: 23 }}>
                  Zutaten
                </AppText>
                <AppText style={{ fontSize: 15 }}>Für 1 Einheit</AppText>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#1E1E2A",
                    borderRadius: 8,
                  }}
                >
                  <AppText style={{ paddingHorizontal: 10, fontSize: 16 }}>
                    Einheiten
                  </AppText>
                  <TextInput
                    onChangeText={(text) => setinputText(text * item.kcal)}
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </View>
              </View>
            </View>
            <Ingredients style={styles.ingredient} item={item} />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Picker
                style={{
                  width: "50%",
                  color: "white",
                  paddingVertical: Platform.OS === "android" ? 50 : 0,
                  height: Platform.OS === "android" ? 30 : null,
                }}
                itemStyle={{ color: "white" }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Frühstück" value="früh" />
                <Picker.Item label="Mittagessen" value="mittag" />
                <Picker.Item label="Abendessen" value="abend" />
              </Picker>
              <AppButton
                width={"40%"}
                title="Hinzufügen"
                onPress={() => navigation.navigate("Rezepte")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  containerFood: {
    alignItems: "flex-start",
    backgroundColor: "#252634",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 17,
  },
  iconsContainer: {
    alignItems: "center",
  },
  iconsGlobalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  iconText: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 15,
  },
  imageIcon: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  ingredient: {
    flexDirection: "row",
  },
  ingredientsHeader: {
    width: "100%",
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderRadius: 7,
    padding: 10,
    height: 40,
    margin: 6,
    width: 60,
    backgroundColor: "#252634",
    color: "white",
    textAlign: "center",
  },
  picker: {},
  pickerContainer: {
    backgroundColor: "white",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  tags: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#976DF6",
    marginBottom: 10,
    marginRight: 10,
    fontSize: 12,
    borderRadius: 5,
    overflow: "hidden",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default RezepteDetailsScreen;
