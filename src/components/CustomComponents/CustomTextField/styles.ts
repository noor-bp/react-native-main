import {StyleSheet} from 'react-native';
import Color from '../../../constants/Color';
import Spacing from '../../../constants/Spacing';
import Font from '../../../constants/Font';

const styles = StyleSheet.create({
  textInputDiv: {
    marginHorizontal: Spacing.Spacing2,
  },
  textInput: {
    borderColor: Color.gray,
      borderWidth: 0.4,
    borderBottomWidth: 0.5,
    backgroundColor: Color.lightGray,
    borderRadius: 8,
    height: 57,
    padding: Spacing.Spacing2,
    fontFamily: Font['Urbanist-m'],
    },
  container:{
  flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 10,
  },
inputFlex: {
    alignSelf: 'stretch',
    width: '100%',
    padding: 0,
    backgroundColor: '#ddd'
  },
visibilityBtn: {
    position: 'absolute',
    right: 9,
    height: 25,
    width: 25,
    padding: 0,
    marginTop: 21,
    },
    btnImage: {
      width: 16, height: 16
  }
});

export default styles;
