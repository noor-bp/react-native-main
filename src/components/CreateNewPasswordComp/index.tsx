import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading'
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField'
import BlackBlueTextButton from '../CustomComponents/BlackBlueTextButton';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton'
import GrayH1Description from '../CustomComponents/GrayH1Description'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  
};

const CreateNewPasswordComp = ({ }: Props) => {
  interface User {
    newPassword: string;
    confirmPassword: string;
  }
        const defaultUser: User = {
          newPassword: '',
          confirmPassword: '',
        };
        const [user, setUser] = useState(defaultUser);

        const handleOnUserChange = <P extends keyof  User>(
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
      <BackBtn_Heading title={'Create New Password'} />
      <View style={{marginHorizontal: 20}}>
        <GrayH1Description title="Your new password must be unique from those previously used." />
      </View>

      <View style={{marginTop: 30}}>
        <CustomTextField
          placeholderTitle="New Password"
          value={user.newPassword}
          handleChange={(e: any) =>
            handleOnUserChange('newPassword', e.target.value)
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <CustomTextField
          placeholderTitle="Confirm Password"
          value={user.confirmPassword}
          handleChange={(e: any) =>
            handleOnUserChange('confirmPassword', e.target.value)
          }
        />
      </View>
      <View style={{marginTop: 20}}>
        <FullWidthBlackButton title="Reset Password" handleSubmit={() => navigation.navigate("PasswordChanged")} />
      </View>

     
    </SafeAreaView>
  );
}

export default CreateNewPasswordComp