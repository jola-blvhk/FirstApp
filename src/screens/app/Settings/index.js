import React, { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";

const Settings = () => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({
    name: "User",
    email: "user@gmail.com",
  });

  const onEditPress = () => {
    setEditing(true);
  };
  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };
  const onSave = () => {};
  const onItemPress = () => {
    Linking.openURL("https://www.google.com/");
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header title="Settings" showBack={true} onBackPress={goBack} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require("../../../assets/edit.png")}
            />
          </Pressable>
        </View>

        <EditableBox
          onChangeText={(v) => onChange("name", v)}
          label="Name"
          value={values.name}
          editable={editing}
        />
        <EditableBox
          onChangeText={(v) => onChange("email", v)}
          label="Email"
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.button} onPress={onSave} title="Save" />
        ) : null}

        <Text style={[styles.sectionTitle, { marginTop: 40 }]}>
          Help Center
        </Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem style={styles.item} title="Contact Us" />
        <ListItem style={styles.item} title="Privacy & Terms" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
