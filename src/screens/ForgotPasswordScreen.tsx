import React from 'react';
import {Text, View} from 'react-native';
import ForgotPasswordComp from '../components/ForgotPasswordComp';

type Props = {};

const ForgotPasswordScreen:React.FC = (props: Props) => {
  return (
    <View>
      <ForgotPasswordComp/>
    </View>
  );
};

export default ForgotPasswordScreen;
