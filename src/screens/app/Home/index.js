import React, { useEffect, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyWord] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log(keyword);
  useEffect(() => {
    if (selectedCategory) {
      const updatedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      console.log(updatedProducts);
      setFilteredProducts(updatedProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);
  const renderCategoryItem = ({ item, index }) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductItem = ({ item, index }) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          showSearch
          onSearch={setKeyWord}
          keyword={keyword}
          title="Find All You Need"
        />

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />

        <FlatList
          style={styles.productsList}
          numColumns={2}
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={
            <View
              style={{ height: 300 }}
              showsVerticalScrollIndicator={false}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
