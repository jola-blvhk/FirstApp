import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.lightBlack,
  },
  titleContainer: {
    marginBottom: 52,
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  footerText: {
    color: colors.blue,
    textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
  },
});
