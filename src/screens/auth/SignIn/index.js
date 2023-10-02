import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
const SignIn = () => {
  const onSignUp = () => {
    console.log("Sign up");
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign IN" />

      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />

      <Button style={styles.button} title="Sign In" />

      <Separator text="Or sign in with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default React.memo(SignIn);
