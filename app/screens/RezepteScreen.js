import React, { useState, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  SectionList,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";

import SECTIONS from "../config/receiptData";
import { useTabBar } from "../components/contexts/TabBarProvider";

const { height } = Dimensions.get("window");

function filterArray(param) {
  let tab = [];
  const receipts = [...SECTIONS];
  let fullFiltered = [];
  let filtered = [];
  for (let i = 0; i < receipts.length; i++) {
    for (let y = 0; y < receipts[i].data.length; y++) {
      if (
        receipts[i].data[y].title
          .toLowerCase()
          .includes(param.toLowerCase().trim()) ||
        receipts[i].data[y].tags
          .toLowerCase()
          .includes(param.toLowerCase().trim())
      ) {
        filtered.push(receipts[i].data[y]);
      }
    }
    fullFiltered.push(filtered);
    filtered = [];
  }
  tab = JSON.parse(JSON.stringify(receipts));
  for (let index = 0; index < fullFiltered.length; index++) {
    tab[index].data = fullFiltered[index];
  }

  return tab;
}
let offset = 0;
function RezepteScreen(props) {
  const { width, height } = Dimensions.get("window");
  const HEIGHT = height;
  const ITEM_SIZE = width * 0.72;
  const SPACING = 30;
  const FULLSIZE = ITEM_SIZE + SPACING;

  const [dataRezepte, setDataRezepte] = useState(SECTIONS);
  const [userSearch, setUserSearch] = useState(false);
  const [contentheight, setContentHeight] = useState(1000);

  const { setShowTabBar } = useTabBar();

  const onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset <= 0) return setShowTabBar(true);
    return setShowTabBar(false);
    /*    if (currentOffset >= contentheight) return setShowTabBar(false); */
    /*  if (currentOffset >= offset ) {
      setShowTabBar(false);
    } else {
      setShowTabBar(true);
    } */
    console.log(currentOffset, offset);
    offset = currentOffset;

    /* if (direction === "down") {
      navigation.dispatch(
        CommonActions.setParams({
          tabBarVisible: false,
        })
      );
    } else {
      navigation.dispatch(
        CommonActions.setParams({
          tabBarVisible: true,
        })
      );
    } */
  };

  return (
    <Screen>
      <View style={styles.containerSearchBar}>
        <TextInput
          clearButtonMode={"while-editing"}
          autoCorrect={false}
          style={styles.searchInput}
          placeholder="Rezept suchen.."
          placeholderTextColor="white"
          onChangeText={(text) => {
            setDataRezepte(filterArray(text));
          }}
        />
      </View>

      <SectionList
        showsVerticalScrollIndicator={true}
        onScroll={(e) => onScroll(e)}
        style={{
          paddingTop: 30,
        }}
        stickySectionHeadersEnabled={false}
        sections={dataRezepte}
        renderSectionHeader={({ section }) => (
          <>
            <AppText font="bold" style={styles.titleCategory}>
              {section.title}
            </AppText>
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
              snapToInterval={FULLSIZE}
              decelerationRate="fast"
              style={styles.flatList}
              data={section.data}
              keyExtractor={(data) => data.id.toString()}
              horizontal
              renderItem={({ item }) => {
                return (
                  <Card
                    title={item.title}
                    subTitle={item.subtitle}
                    image={item.image}
                    vegetarian={item.vegetarian}
                    vegan={item.vegan}
                    style={{
                      marginRight: SPACING,
                      width: ITEM_SIZE,
                      height: HEIGHT / 4,
                    }}
                    onPress={() =>
                      props.navigation.navigate("RezepteDetails", item)
                    }
                  />
                );
              }}
            />
          </>
        )}
        renderItem={({ item, section }) => {
          return null;
          return (
            <Card
              title={item.title}
              subTitle={item.subtitle}
              image={item.image}
              icon={item.icon}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 15,
  },
  titleCategory: {
    fontSize: 22,
    marginBottom: 10,
    paddingLeft: 20,
  },
  containerSearchBar: {
    width: "100%",
    height: 70,
    backgroundColor: "#252634",

    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchInput: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "yellow",
    borderRadius: 8,
    backgroundColor: colors.dark,
    color: "white",
  },
});

export default RezepteScreen;
