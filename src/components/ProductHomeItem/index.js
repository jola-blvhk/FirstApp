import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Input from "../Input";
const ProductHomeItem = ({ title, image, onPress, price }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default ProductHomeItem;
