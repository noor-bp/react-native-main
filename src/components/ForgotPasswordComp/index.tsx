import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading'
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField'
import BlackBlueTextButton from '../CustomComponents/BlackBlueTextButton';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton'
import GrayH1Description from '../CustomComponents/GrayH1Description'
import { useNavigation } from '@react-navigation/native'

interface Props {
   
};

const ForgotPasswordComp = ({ }: Props) => {
  interface  User {
        email: string;
    }
        const defaultUser: User = {
          email: '',
        };
        const [user, setUser] = useState(defaultUser);

        const handleOnUserChange = <P extends keyof User>(
          prop: P,
          value: (User)[P],
        ) => {
          setUser({...user, [prop]: value});
        };

        const handleSubmit = () => {
          console.log(user);
        };
  
  
  const navigation:any = useNavigation()

  return (
    <SafeAreaView>
      <BackBtn_Heading title={'Forgot Password?'} />
      <View style={{marginHorizontal: 20}}>
        <GrayH1Description
          title=" Don't worry! It occurs. Please enter the email address linked with
          your account."
        />
      </View>
      <View style={{marginTop: 30}}>
        <CustomTextField
          placeholderTitle="Enter your email"
          value={user.email}
          handleChange={(e: any) => handleOnUserChange('email', e.target.value)}
        />
      </View>
      <View>
        <FullWidthBlackButton title="Send Code" handleSubmit={() => navigation.navigate("OTP")} />
      </View>

      <View>
        <BlackBlueTextButton blackTitle="Remember Password" blueTitle="Login" handleClick={() => navigation.navigate("Login")} />
      </View>
    </SafeAreaView>
  );
}

export default ForgotPasswordComp