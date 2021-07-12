import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
// import AppText from '../components/AppText';
import CardFood from '../components/CardFood';
import Screen from '../components/Screen';
import colors from '../config/colors';
import foodData from '../config/foodData';
import _ from 'lodash';

function AddFoodScreen(props) {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const title = props.route.params.title;
  // const test = foodData.map((food) => {
  //   return <AppText key={food.id}>{food.title}</AppText>;
  // });

  useEffect(() => {
    setFullData(foodData);
  }, []);

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#3E405A',
        height: 0.4,
        width: '80%',
        alignSelf: 'center',
      }}
    />
  );

  const getData = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  };

  const handleSearch = async (text) => {
    setLoading(true);
    const formatQuery = text.toLowerCase();
    console.log(text);
    const unfilteredData = await getData(fullData);
    const filteredData = unfilteredData.filter((filteredFood) => {
      return filteredFood.title.toLowerCase().includes(formatQuery);
    });

    setQuery(formatQuery);
    setData(filteredData);
    setLoading(false);
  };

  return (
    <Screen>
      <View style={styles.containerSearchBar}>
        <TextInput
          clearButtonMode={'while-editing'}
          autoCorrect={false}
          style={styles.searchInput}
          placeholder="Nahrungsmittel suchen.."
          placeholderTextColor="white"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : query.length === 0 ? (
          <Text style={styles.textOutput}>Search for a recipe...</Text>
        ) : (
          <FlatList
            contentContrainerStyle={{ padding: 20 }}
            data={data}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => {
              return (
                <CardFood
                  title={item.title}
                  kcal={item.kcal}
                  carbohydrates={item.carbohydrates}
                  protein={item.protein}
                  fat={item.fat}
                  style={{
                    width: '100%',
                    height: 100,
                  }}
                  onPress={() =>
                    props.navigation.navigate('FoodDetails', {
                      ...item,
                      newTitle: title,
                    })
                  }
                />
              );
            }}
            ListEmptyComponent={
              <Text style={styles.textOutput}>No recipe of "{query}" found</Text>
            }
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSearchBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#252634',

    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchInput: {
    paddingHorizontal: 10,
    height: '100%',
    backgroundColor: 'yellow',
    borderRadius: 8,
    backgroundColor: colors.dark,
    color: 'white',
  },
  textOutput: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 10,
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
