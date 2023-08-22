import React from 'react'
import { View } from 'react-native'
import CreateNewPasswordComp from '../components/CreateNewPasswordComp';

type Props = {}

const CreateNewPasswordScreen:React.FC = (props: Props) => {
  return (
    <View>
      <CreateNewPasswordComp />
    </View>
  );
}

export default CreateNewPasswordScreen