import { StyleSheet } from "react-native"
import Color from "../../../constants/Color";
import FontSize from "../../../constants/FontSize";


const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 5,
    marginBottom: 30,
  },
  btnText: {
    color: Color.primary,
    fontSize: FontSize.smallTwo,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  btnTextBlack: {
    color: Color.darkBlack,
    fontSize: FontSize.smallTwo,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles