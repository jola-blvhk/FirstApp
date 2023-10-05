import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";

const Home = () => {
  const renderCategoryItem = (item, index) => {
    return (
      <View onPress={() => console.log(item)}>
        <Text>{item?.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header showSearch title="Find All You Need" />

        <FlatList
          style={styles.list}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
        />

        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
