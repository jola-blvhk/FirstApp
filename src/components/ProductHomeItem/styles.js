import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  price: {
    color: colors.lightBlack,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  title: {
    color: colors.textGrey,
  },
});
