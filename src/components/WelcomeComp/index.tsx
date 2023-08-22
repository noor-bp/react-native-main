import React from 'react'
import { Dimensions, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
type Props = {}

export default function WelcomeComp({}: any) {
  const { height } = Dimensions.get('window');
  const navigation:any = useNavigation()
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.imgBg}
          source={require('../../assets/images/welcomeImg.png')}>
          <View style={styles.innerBgView}>
            <Image
              style={styles.logoBg}
              source={require('../../assets/images/Branding.png')}
            />

            <View>
              <Pressable
                style={styles.loginBtn}
                onPress={() => navigation.navigate('Login')}>
                <View style={styles.loginBtnView}>
                  <Text style={styles.loginBtnText}>Login</Text>
                </View>
              </Pressable>

              <Pressable
                style={styles.registerBtn}
                onPress={() => navigation.navigate('Register')}>
                <View style={styles.loginBtnView}>
                  <Text style={styles.registerBtnText}>Register</Text>
                </View>
              </Pressable>

              <Pressable style={styles.guestBtn}>
                <View style={styles.loginBtnView}>
                  <Text style={styles.guestBtnText}>Continue as a guest</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgBg: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  innerBgView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  logoBg: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  fontstyle1: {
    fontSize: 24,
  },
  loginBtn: {
    width: Dimensions.get('window').width - 32,
    height: 56,
    backgroundColor: '#1E232C',
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  loginBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  loginBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  registerBtn: {
    width: Dimensions.get('window').width - 32,
    height: 56,
    borderColor: '#1E232C',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  registerBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E232C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
  guestBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  guestBtnText: {
    color: '#35C2C1',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  },
});