import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const Input = ({
  label,
  placeholder,
  type,
  isPassword,
  value,
  options,
  style,
  onChangeText,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect = (opt) => {
    onChangeText(opt);
    setIsPickerModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {type === "picker" ? (
        <Pressable
          onPress={() => {
            setIsPickerModalVisible(true);
          }}
          style={styles.inputContainer}
        >
          {value ? (
            <Text style={[styles.input, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}

          <Image
            style={styles.arrow}
            source={require("../../assets/forward.png")}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            style={[styles.input, style]}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require("../../assets/eye-open.png")
                    : require("../../assets/eye-close.png")
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}

      <Modal visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsPickerModalVisible(false)}
          style={styles.modalWrapper}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>
            {options?.map((option) => {
              if (!option?.id) {
                return null;
              }
              const selected = value?.id === option?.id;
              return (
                <Text
                  key={option?.title}
                  onPress={() => onSelect(option)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                >
                  {option?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;
