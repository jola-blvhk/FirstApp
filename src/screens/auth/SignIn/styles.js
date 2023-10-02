import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});
