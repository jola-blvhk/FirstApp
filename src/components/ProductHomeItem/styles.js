import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

console.log("width :", width);

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 15,

    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  price: {
    color: colors.lightBlack,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: (width - 80) / 2,
    height: 220,
    borderRadius: 8,
  },
  title: {
    color: colors.textGrey,
    fontSize: 16,
    paddingVertical: 6,
  },
});
