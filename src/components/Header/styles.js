import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  space: {
    width: 24,
    height: 24,
  },
});
