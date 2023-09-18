import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
    // backgroundColor: colors.blue,
    // paddingVertical: 20,
    // paddingHorizontal: 8,
    // borderRadius: 10,
    // width: "100%",
  },
  checkbox: {
    borderWidth: 1,
    backgroundColor: colors.grey,
    width: "100%",
    height: "100%",
    justifyContent: "center",

    // color: colors.white,
    // textAlign: "center",
    // fontSize: 16,
    // fontWeight: "bold",
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
