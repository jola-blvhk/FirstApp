import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";

const Settings = () => {
  return (
    <SafeAreaView>
      <Header title="Settings" />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Hlp Center</Text>
        <ListItem title="FAQ" />
        <ListItem title="Contact Us" />
        <ListItem title="Privacy & Terms" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
