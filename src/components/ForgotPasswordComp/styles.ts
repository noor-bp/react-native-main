import { StyleSheet } from "react-native";
import Font from "../../constants/Font";
import Color from "../../constants/Color";
import FontSize from "../../constants/FontSize";

const styles = StyleSheet.create({
  textDesc: {
    fontFamily: Font['Urbanist-sb'],
    color: Color.gray,
    fontSize: FontSize.medium,
  },
  ErrorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 30,
    marginTop: 8,
  },
});

export default styles