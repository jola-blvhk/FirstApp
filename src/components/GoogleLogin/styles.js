import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    alignSelf: "center",
    borderRadius: 14,
    width: "45%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: 30,
    height: 30,
  },
});
