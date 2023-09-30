import React from "react";
import { Image, Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const GoogleLogin = () => {
  console.log("INSIDE BUTTON");
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      //   onPress={onPress}
      style={styles.container}
    >
      <Image style={styles.image} source={require("../../assets/google.png")} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
