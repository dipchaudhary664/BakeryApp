import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { imagesTitle } from "../Data/CategoryData";

const CategoryScreen = ({ navigation }) => {
  const renderImageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("BakeryDetails", { Name: item.Engname });
      }}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.Engname}</Text>
      <Text style={styles.title}>{item.Thainame}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../img/logo.jpg")} style={styles.img} />
        <Text style={styles.headerText}>
          Hope you have a good day, Johnathan
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={imagesTitle.data}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#FFD0A5",
    height: 125,
    width: "100%",
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 12,
    color: "black",
    paddingRight: 50,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  flatListContainer: {
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 125,
    borderRadius: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 10,
    fontWeight: "600",
  },
});

export default CategoryScreen;
