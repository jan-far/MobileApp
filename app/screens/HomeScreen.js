import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { useTabBar } from "../components/contexts/TabBarProvider";

function HomeScreen(props) {
  const [calories, setCalories] = useState("vide");
  const load = async () => {
    try {
      let value = await AsyncStorage.getItem("calories");
      if (value) setCalories(value);
    } catch (error) {
      alert(error);
    }
  };

  const { setShowTabBar } = useTabBar();

  const onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset <= 0) return setShowTabBar(true);
    return setShowTabBar(false);
  };
  useEffect(() => {
    load();
  });

  return (
    <Screen>
      <ScrollView onScroll={(e) => onScroll(e)} scrollEventThrottle={16}>
        <View style={styles.container}>
          <AppText font="bold" style={{ fontSize: 22 }}>
            Zusammenfassung
          </AppText>
          <View style={styles.summaryContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: "70%",
                alignItems: "center",
                paddingHorizontal: 15,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginBottom: 3,
                  }}
                >
                  <AppText>435 </AppText>
                  <AppText font="light" style={{ fontSize: 11 }}>
                    kcal
                  </AppText>
                </View>
                <AppText font="light" style={{ fontSize: 14 }}>
                  Gegessen
                </AppText>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginBottom: 3,
                  }}
                >
                  <AppText style={{ fontSize: 25, fontWeight: "bold" }}>
                    1587{" "}
                  </AppText>
                  <AppText font="light" style={{ fontSize: 11 }}>
                    kcal
                  </AppText>
                </View>
                <View>
                  <AppText font="light" style={{ fontSize: 14 }}>
                    Übrig
                  </AppText>
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginBottom: 3,
                  }}
                >
                  <AppText>0 </AppText>
                  <AppText font="light" style={{ fontSize: 11 }}>
                    kcal
                  </AppText>
                </View>
                <AppText font="light" style={{ fontSize: 14 }}>
                  Verbrannt
                </AppText>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <AppText font="light" style={{ fontSize: 12 }}>
                  Kohlenhydrate
                </AppText>
                <AppText font="light" style={{ fontSize: 11 }}>
                  72 / 190 g
                </AppText>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <AppText font="light" style={{ fontSize: 12 }}>
                  Protein
                </AppText>
                <AppText font="light" style={{ fontSize: 11 }}>
                  72 / 190 g
                </AppText>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <AppText font="light" style={{ fontSize: 12 }}>
                  Fett
                </AppText>
                <AppText font="light" style={{ fontSize: 11 }}>
                  72 / 190 g
                </AppText>
              </View>
            </View>
          </View>
          <AppText font="bold" style={{ marginBottom: 10 }}>
            Kalorien
          </AppText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("AddFood", { title: "Frühstück" })
                }
              >
                <View style={styles.calContainer}>
                  <AppText style={styles.tag}>Frühstück</AppText>
                  <View style={{ alignItems: "center" }}>
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={24}
                      color="white"
                    />
                    <AppText font="light" style={{ fontSize: 12 }}>
                      Hinzufügen
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
              <AppText style={{ fontSize: 15 }}>0 kcal</AppText>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("AddFood", { title: "Mittag" })
                }
              >
                <View style={styles.calContainer}>
                  <AppText style={styles.tag}>Mittag</AppText>
                  <View style={{ alignItems: "center" }}>
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={24}
                      color="white"
                    />
                    <AppText font="light" style={{ fontSize: 12 }}>
                      Hinzufügen
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
              <AppText style={{ fontSize: 15 }}>0 kcal</AppText>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("AddFood", { title: "Abend" })
                }
              >
                <View style={styles.calContainer}>
                  <AppText style={styles.tag}>Abend</AppText>
                  <View style={{ alignItems: "center" }}>
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={24}
                      color="white"
                    />
                    <AppText font="light" style={{ fontSize: 12 }}>
                      Hinzufügen
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
              <AppText style={{ fontSize: 15 }}>0 kcal</AppText>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("AddFood", { title: "Snack" })
                }
              >
                <View style={styles.calContainer}>
                  <AppText style={styles.tag}>Snack</AppText>
                  <View style={{ alignItems: "center" }}>
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={24}
                      color="white"
                    />
                    <AppText font="light" style={{ fontSize: 12 }}>
                      Hinzufügen
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
              <AppText style={{ fontSize: 15 }}>0 kcal</AppText>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  calContainer: {
    backgroundColor: "#262736",
    width: 160,
    height: 160,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flex: 1,
    paddingBottom: 50,
  },
  summaryContainer: {
    backgroundColor: "#262736",
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 20,
  },
  tag: {
    position: "absolute",
    right: 8,
    top: 8,
    backgroundColor: "#976DF6",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 10,
    overflow: "hidden",
  },
});

export default HomeScreen;
