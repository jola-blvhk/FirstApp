import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox";
import Bed from "../../../assets/categories/bed.png";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
  const renderCategoryItem = ({ item }) => {
    return <CategoryBox {...item} />;
  };
  const renderProductItem = ({ item, index }) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header showSearch title="Find All You Need" />

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />

        <FlatList
          numColumns={2}
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
