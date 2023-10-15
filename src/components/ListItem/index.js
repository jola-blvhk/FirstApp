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
const ListItem = ({ title, subtitle, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image
        style={styles.arrow}
        source={require("../../assets/forward.png")}
      />
    </Pressable>
  );
};

export default React.memo(ListItem);
