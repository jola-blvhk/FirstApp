import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log("Sign in");
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeBold}>Terms </Text>&{" "}
          <Text style={styles.agreeBold}>Privacy</Text>
        </Text>
      </View>

      <Button style={styles.button} title="Sign Up" />

      <Separator text="Or sign up with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default React.memo(Signup);
