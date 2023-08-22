import {StyleSheet} from 'react-native';
import Color from '../../../constants/Color';
import Font from '../../../constants/Font';
import Spacing from '../../../constants/Spacing';

const styles = StyleSheet.create({
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
  },
  heading1: {
    fontFamily: Font['Urbanist-b'],
    fontSize: 30,
    color: Color.darkBlack,
    // width: 280,
  },
});

export default styles;
