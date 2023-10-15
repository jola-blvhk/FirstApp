import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Linking,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import { products } from "../../../data/products";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    const phoneNumber = "+2348097098619";
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.safe}>
      {/* <SafeAreaView style={styles.safe}> */}
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image style={styles.image} source={{ uri: product?.image }} />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backItem}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkItem}
            source={require("../../../assets/tabs/favorites.png")}
          />
        </Pressable>
        <Button title="Contact Seller" onPress={onContact} />
      </View>

      {/* </SafeAreaView> */}
    </View>
  );
};

export default React.memo(ProductDetails);
