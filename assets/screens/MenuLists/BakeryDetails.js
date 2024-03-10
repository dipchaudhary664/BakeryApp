import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { imagesTitle } from "../../Data/CategoryData";
import { useNavigation } from "@react-navigation/native";

const BakeryDetails = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { Name } = route.params;

  // Find the selected bakery data
  const selectedBakery = imagesTitle.data.find((item) => item.Engname === Name);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CategoryScreen");
          }}
        >
          <Image source={require("../../img/logo.jpg")} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Hope you have a good day, Johnathan
        </Text>
      </View>
      <ScrollView>
        {/* <View style={styles.Iconcontainer}>
          <TouchableOpacity>
            <Image
              source={require("../../img/leftIcon.png")}
              style={styles.Arrowicon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../img/leftIcon.png")}
              style={styles.ArrowiconRight}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.containerItem}>
          {/* Display details for the selected bakery */}
          {selectedBakery && (
            <>
              <Image source={selectedBakery.image} style={styles.image} />
              <Text style={styles.textitels}>{selectedBakery.Engname}</Text>
              <Text style={styles.textitels}>{selectedBakery.Thainame}</Text>
              {/* Add other details as needed */}
              {selectedBakery.recipe && (
                <>
                  <Text style={styles.text01}>{selectedBakery.title01}:</Text>
                  {selectedBakery.recipe.ingredients.map(
                    (ingredient, index) => (
                      <Text key={index} style={styles.BakeryDetails}>
                        {ingredient}
                      </Text>
                    )
                  )}
                  <Text style={styles.text01}>{selectedBakery.title02}:</Text>
                  {selectedBakery.recipe.instructions.map(
                    (instruction, index) => (
                      <Text key={index} style={styles.BakeryDetails}>
                        {instruction}
                      </Text>
                    )
                  )}
                </>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </>
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
  containerItem: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  // Iconcontainer: {
  //   paddingTop: 20,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 50,
  //   alignItems: "center",
  // },
  // Arrowicon: {
  //   width: 30,
  //   height: 30,
  // },
  // ArrowiconRight: {
  //   transform: [{ rotate: "180deg" }],
  //   width: 30,
  //   height: 30,
  // },

  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  textitels: {
    fontSize: 16,
  },
  text01: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
  },
  BakeryDetails: {
    fontSize: 14,
    marginVertical: 0.5,
    marginHorizontal: 20,
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default BakeryDetails;
