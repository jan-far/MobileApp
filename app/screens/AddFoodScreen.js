import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../components/AppText";
import CardFood from "../components/CardFood";
import Screen from "../components/Screen";
import colors from "../config/colors";
import foodData from "../config/foodData";
import _ from "lodash";
import InfiniteScroll from "react-native-infinite-scrolling";

let { height } = Dimensions.get("window");

function AddFoodScreen(props) {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [dataNoSlice, setDataNoSlice] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(19);

  const title = props.route.params.title;
  const test = foodData.map((food) => {
    return <AppText key={food.id}>{food.title}</AppText>;
  });

  useEffect(() => {
    setFullData(foodData);
    return () => {
      setFullData([]);
    };
  }, []);
s
  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#3E405A",
        height: 0.4,
        width: "80%",
        alignSelf: "center",
      }}
    />
  );

  const handleSearch = (text) => {
    const formatQuery = text.toLowerCase();
    console.log(text);
    const filteredData = fullData.filter((filteredFood) => {
      return filteredFood.title.toLowerCase().includes(formatQuery);
    });

    setQuery(formatQuery);
    setData(filteredData.slice(0, 19));
  };

  const 

  return (
    <Screen>
      <View style={styles.containerSearchBar}>
        <TextInput
          clearButtonMode={"while-editing"}
          autoCorrect={false}
          style={styles.searchInput}
          placeholder="Nahrungsmittel suchen.."
          placeholderTextColor="white"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          contentContrainerStyle={{ padding: 20 }}
          data={data}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => {
            return <AppText>{item.title}</AppText>;
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default AddFoodScreen;
{
  /* <CardFood
                  title={item.title}
                  kcal={item.kcal}
                  carbohydrates={item.carbohydrates}
                  protein={item.protein}
                  fat={item.fat}
                  style={{
                    width: "100%",
                    height: 100,
                  }}
                  onPress={() =>
                    props.navigation.navigate("FoodDetails", {
                      ...item,
                      newTitle: title,
                    })
                  }
                /> */
}
