import React from 'react'
import { Text, View } from 'react-native'
import LoginComp from '../components/LoginComp';

type Props = {}

const LoginScreen:React.FC = (props: Props) => {
  return (
    <View>
      <LoginComp />
    </View>
  );
}

export default LoginScreen