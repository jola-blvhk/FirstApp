import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },

  label: {
    color: colors.textSecondaryGrey,
    marginBottom: 6,
    fontSize: 12,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
});
