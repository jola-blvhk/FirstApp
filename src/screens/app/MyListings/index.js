import React from "react";
import {  View, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";

const MyListings = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const onProductPress = (product) => {
      navigation.navigate("ProductDetails", { product });
    };
    return <FavoriteItem icon={require("../../../assets/delete.png")} onPress={() => onProductPress(item)} {...item} />;
  };

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="My Listings"showBack onBackPress={goBack}/>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
