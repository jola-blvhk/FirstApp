import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");
const EditableBox = ({
  label,
  value,
  editable,
  onChangeText,

  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default React.memo(EditableBox);
