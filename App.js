import React, { useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import RezepteScreen from "./app/screens/RezepteScreen";
import RezepteDetailsScreen from "./app/screens/RezepteDetailsScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ChatScreen from "./app/screens/ChatScreen";
import { Text, StyleSheet, View, Platform } from "react-native";
import Screen from "./app/components/Screen";
import TabNavigator from "./app/navigation/TabNavigator";
import TabBarProvider from "./app/components/contexts/TabBarProvider";
import AddFoodScreen from "./app/screens/AddFoodScreen";
import FoodDetailsScreen from "./app/screens/FoodDetailsScreen";

/* const TabNavigators = () => {
  let num = Platform.OS === "android" ? 35 : 45;
  let pos = useRef(num);
  let test = useRef("20%");
  const getTabBarVisible = (route) => {
    const params = route.params;

    if (params) {
      if (params.tabBarVisible === false) {
        pos.current = 0;
        test.current = -1000;
        return false;
      }
    }
    pos.current = num;
    test.current = "20%";
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: pos.current,
          right: test.current,
          left: test.current,
          borderRadius: 10,
          height: 60,
          backgroundColor: "rgba(37, 38, 52, 0.9)",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: Platform.OS === "android" ? 0 : 15,
              }}
            >
              <FontAwesome
                name="home"
                size={size}
                color={focused ? "#976DF6" : "white"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Rezepte"
        component={RezepteScreen}
        options={({ route }) => ({
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: Platform.OS === "android" ? 0 : 15,
              }}
            >
              <MaterialCommunityIcons
                name="chef-hat"
                size={size}
                color={focused ? "#976DF6" : "white"}
              />
            </View>
          ),
          tabBarVisible: getTabBarVisible(route),
        })}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: Platform.OS === "android" ? 0 : 15,
              }}
            >
              <Entypo
                name="chat"
                size={size}
                color={focused ? "#976DF6" : "white"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sonstiges"
        component={Sonstiges}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: Platform.OS === "android" ? 0 : 15,
              }}
            >
              <Ionicons
                name="settings"
                size={size}
                color={focused ? "#976DF6" : "white"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}; */

const Stack = createStackNavigator();
const RezepteNavigator = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#252634",
        shadowColor: "transparent",
        elevation: 0,
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Rezepte" component={TabNavigator} />
    <Stack.Screen
      options={({ route }) => ({
        title: route.params.title,
      })}
      name="RezepteDetails"
      component={RezepteDetailsScreen}
    />
    <Stack.Screen
      name="AddFood"
      component={AddFoodScreen}
      options={({ route }) => ({
        title: "Nahrungsmittel",
      })}
    />
    <Stack.Screen
      name="FoodDetails"
      component={FoodDetailsScreen}
      options={({ route }) => ({
        title: route.params.newTitle,
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <RezepteNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
