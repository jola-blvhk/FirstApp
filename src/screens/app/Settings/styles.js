import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  item: {
    padding: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },

  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});
