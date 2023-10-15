import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");
const ListItem = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image
        style={styles.arrow}
        source={require("../../assets/forward.png")}
      />
    </View>
  );
};

export default React.memo(ListItem);
