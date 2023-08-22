import { StyleSheet } from "react-native";
import Color from "../../constants/Color";
import Spacing from "../../constants/Spacing";
import Font from "../../constants/Font";
import FontSize from "../../constants/FontSize";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    textAlign: 'center',
  },
  checkImg: {
    width: 100,
    height: 100,
  },
  backArrowDiv: {
    width: 41,
    height: 41,
    borderRadius: 12,
    borderColor: Color.borderClr,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
  headingDiv: {
    marginVertical: 30,
    paddingHorizontal: Spacing.Spacing2,
    textAlign: 'center',
  },
  heading1: {
    fontFamily: Font['Urbanist-b'],
    fontSize: 30,
    color: Color.darkBlack,
    // width: 280,
    textAlign: 'center',
  },
  headingDescDiv: {
    justifyContent: 'center',
    width: '100%',
  },
  textDesc: {
    fontFamily: Font['Urbanist-sb'],
    color: Color.gray,
    fontSize: FontSize.medium,
    textAlign: 'center',
  },
});

export default styles