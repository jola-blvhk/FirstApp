import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

const Profile = ({ navigation }) => {
  const onLogOut = () => {};
  const num = 5;
  const onSettingsPress = () => {
    navigation.navigate("Settings");
  };
  const onNewListingPress = () => {
    navigation.navigate("CreateListing");
  };
  const onMyListingsPress = () => {
     navigation.navigate("MyListings");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Header title="Profile" showLogout onLogOut={onLogOut} />
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>Oluremi Bello</Text>
          <Text style={styles.email}>awujoolabello@gmail.com</Text>

          <ListItem onPress={onMyListingsPress} title="My Listings" subtitle={`You have ${num} listings`} />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle={`Account, FAQ, Contact`}
          />
        </View>

        <Button
          style={{ flex: 0 }}
          title="Add New Listing"
          onPress={onNewListingPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
