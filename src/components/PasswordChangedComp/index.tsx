import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import GrayH1Description from '../CustomComponents/GrayH1Description';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton';
import { useNavigation } from '@react-navigation/native';


type Props = {}

const PasswordChangedComp = (props: Props) => {
  const navigation:any = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/Successmark.png')}
          style={styles.checkImg}
        />
      </View>
      <View style={styles.headingDescDiv}>
        <View style={styles.headingDiv}>
          <Text style={styles.heading1}>Password Changed!</Text>
        </View>

        <View style={{justifyContent: 'center', marginLeft: '14%'}}>
          <Text
            style={[styles.textDesc, {marginHorizontal: 20, maxWidth: 226}]}>
            Your password has been changed successfully.
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <FullWidthBlackButton
            title="Back to Login"
            handleSubmit={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
}

export default PasswordChangedComp