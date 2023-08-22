import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles"
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import Color from '../../constants/Color';
import { useNavigation } from '@react-navigation/native';


type Props = {}

export default function LoginComp({ }: Props) {

  const navigation:any = useNavigation()

  return (
    <SafeAreaView>
      <View style={{backgroundColor: Color.white}}>
        <BackBtn_Heading
          title={'Welcome back! Glad to see you, Again!'}
          handleClick={() => navigation.goBack()}
        />
        <View style={{marginTop: 20, marginBottom: 20}}>
          <CustomTextField placeholderTitle="Enter your email" />
        </View>
        <View>
          <CustomTextField
            placeholderTitle="Enter your password"
            hasPassword={true}
          />
        </View>

        <Pressable
          style={styles.textBtnDiv}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textBtn}>Forgot Password?</Text>
        </Pressable>

        <Pressable style={styles.loginBtn}>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnText}>Login</Text>
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 20,
          }}>
          <View style={styles.loginDivider} />
          <View>
            <Text style={styles.loginDividerText}>Or Login with</Text>
          </View>
          <View style={styles.loginDivider} />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}>
          <View style={styles.logoIconsDiv}>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.logoIcons}
            />
          </View>
          <View style={[styles.logoIconsDiv, {marginLeft: 15}]}>
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.logoIcons}
            />
          </View>
          <View style={[styles.logoIconsDiv, {marginLeft: 15}]}>
            <Image
              source={require('../../assets/images/apple.png')}
              style={styles.logoIcons}
            />
          </View>
        </View>
        <Pressable
          style={styles.guestBtn}
          onPress={() => navigation.navigate('Register')}>
          <View style={styles.loginBtnView}>
            <Text style={styles.guestBtnTextBlack}>
              Don’t have an account?
              <Text style={styles.guestBtnText}> Register Now</Text>
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}