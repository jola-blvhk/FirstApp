import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <View>
        <Checkbox checked={checked} onCheck={setChecked} />
      </View>
    </View>
  );
};

export default Signup;
