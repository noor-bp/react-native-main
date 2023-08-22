import React, { ChangeEvent, useEffect, useState } from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import Color from '../../constants/Color';
import { useNavigation } from '@react-navigation/native';

interface Props {
   
};


const RegisterComp = ({  }: Props) => {
   interface User {
     username: string;
     email: string;
     password: string;
     confirmPassword: string;
   }

    const defaultUser:  User = {
    username: "",
        email: "",
        password: "",
        confirmPassword: ""
}
    const [user, setUser] = useState(defaultUser);

    // const handleOnUserChange = (prop: keyof typeof User, value: any) => {
    //     setUser({...user, [prop] : value})
    // }

    const handleOnUserChange =<P extends keyof  User>(prop: P, value:   User[P]) => {
      setUser({...user, [prop]: value});
    };

    const handleSubmit = () => {
        console.log(user)
    }

   
    // const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     setPassword(e.target.value);
    //     console.warn(e.target.value);
    // };

 
    //   const handleInputChange: React.ChangeEventHandler<HTM  LInputElement> = event => {
    //     setPassword(event.target.value);
  //   };
  
  // const handleInputChange : 

      const navigation:any = useNavigation()
  return (
    <SafeAreaView>
      <View style={{backgroundColor: Color.white}}>
        <BackBtn_Heading title={'Hello! Register to get started'} />
        <View style={{marginTop: 0}}>
          <CustomTextField
            placeholderTitle="Username"
            value={user.username}
            handleChange={(e: any) =>
              handleOnUserChange('username', e.target.value)
            }
          />
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Email"
            value={user.email}
            // handleChange={(e: any) =>
            //   handleOnUserChange('email', e.target.value)
            // }
          />
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Password"
            hasPassword={true}
            // handleChange={handlePassword}
            // value={password}
            value={user.password}
            // handleChange={(e: any) =>
            //   handleOnUserChange('password', e.target.value)
            // }
          />
        </View>
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Confirm Password"
            hasPassword={true}
            value={user.confirmPassword}
            // handleChange={(e: any) =>
            //   handleOnUserChange('confirmPassword', e.target.value)
            // }
          />
        </View>

        <Pressable style={styles.loginBtn} onPress={handleSubmit}>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnText}>Register</Text>
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
            <Text style={styles.loginDividerText}>Or Register with</Text>
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
            marginTop: 0,
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
        <Pressable style={styles.guestBtn}>
          <View style={styles.loginBtnView}>
            <Text style={styles.guestBtnTextBlack}>
              Don’t have an account?
              <View style={{marginTop: 10}}>
                <Pressable
                  onPress={() => navigation.navigate('Login')}
                  style={{marginTop: 10}}>
                  <Text style={styles.guestBtnText}> Login Now</Text>
                </Pressable>
              </View>
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default RegisterComp