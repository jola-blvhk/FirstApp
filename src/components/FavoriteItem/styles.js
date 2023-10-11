import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

console.log("width :", width);

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: colors.blurGrey,
    // justifyContent: "center",
    // alignItems: "center",
  },
  price: {
    color: colors.lightBlack,
    fontSize: 16,

    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  title: {
    color: colors.textGrey,
    fontSize: 16,
    paddingVertical: 6,
  },
  content: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
