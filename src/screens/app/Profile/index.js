import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

const Profile = () => {
  const onLogOut = () => {};
  const num = 5;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Header title="Profile" showLogout onLogOut={onLogOut} />
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>Oluremi Bello</Text>
          <Text style={styles.email}>awujoolabello@gmail.com</Text>

          <ListItem title="My Listings" subtitle={`You have ${num} listings`} />
          <ListItem title="Settings" subtitle={`Account, FAQ, Contact`} />
        </View>

        <Button style={{ flex: 0 }} title="Add New Listing" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
