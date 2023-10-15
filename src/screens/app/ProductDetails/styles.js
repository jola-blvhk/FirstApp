import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const { height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: height * 0.6,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontWeight: "500",
    fontSize: 24,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    color: colors.textGrey,
    fontWeight: "300",
  },
  footer: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkItem: {
    width: 20,
    height: 20,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: "absolute",
    top: 30,
  },
  backItem: {
    width: 20,
    height: 20,
  },
});
