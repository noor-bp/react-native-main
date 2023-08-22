import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import Font from '../../constants/Font';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Dimensions from '../../constants/Dimensions';

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
  loginDivider: {
    flex: 1,
    height: 1,
    backgroundColor: Color.borderClr,
  },
  loginDividerText: {
    width: 120,
    textAlign: 'center',
    color: Color.darkGray,
    marginHorizontal: 5,
    fontFamily: Font['Urbanist-sb'],
  },
  logoIconsDiv: {
    width: 105,
    height: 56,
    borderColor: Color.borderClr,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  logoIcons: {
    width: 20,
    height: 20,
  },
  guestBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 30
  },
  guestBtnText: {
    color: Color.primary,
    fontSize: FontSize.smallTwo,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  guestBtnTextBlack: {
    color: Color.darkBlack,
    fontSize: FontSize.smallTwo,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
});

export default styles;
