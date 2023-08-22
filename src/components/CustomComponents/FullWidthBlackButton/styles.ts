import { StyleSheet } from "react-native";
import Font from "../../../constants/Font";
import Color from "../../../constants/Color";
import Dimensions from "../../../constants/Dimensions";

const styles = StyleSheet.create({
  loginBtn: {
    width: Dimensions.width - 32,
    height: 56,
    backgroundColor: Color.darkBlack,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  loginBtnText: {
    fontSize: 15,
    fontFamily: Font['Urbanist-sb'],
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
});
export default styles;