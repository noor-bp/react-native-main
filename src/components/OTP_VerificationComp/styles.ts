import {StyleSheet} from 'react-native';
import Font from '../../constants/Font';
import Color from '../../constants/Color';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  textDesc: {
    fontFamily: Font['Urbanist-sb'],
    color: Color.gray,
    fontSize: FontSize.medium,
  },
  pin1Input: {
      width: 70,
      height: 60,
      borderRadius: 8,
      borderWidth: 1,
      textAlign: "center",
      alignItems: "center",
      fontSize: FontSize.xL,
      fontFamily: Font['Urbanist-b'],
      color: Color.darkBlack,
    },
  
});

export default styles;
