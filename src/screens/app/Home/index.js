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

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyWord] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        (product) =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);
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
    const onProductPress = (product) => {
      navigation.navigate("ProductDetails", { product });
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
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
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 400 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
