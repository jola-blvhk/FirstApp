import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

import Input from "../Input";
const CategoryBox = ({ title, image, onPress, isFirst, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? { marginLeft: 6 } : {}]}
    >
      <View
        style={[
          styles.imageContainer,
          isSelected ? { backgroundColor: colors.black } : {},
        ]}
      >
        <Image style={styles.image} source={image} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? { color: colors.blue, fontWeight: "500" } : {},
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryBox;
