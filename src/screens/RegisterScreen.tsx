import React from 'react'
import { View } from 'react-native'
import RegisterComp from '../components/RegisterComp'

type Props = {}

const RegisterScreen:React.FC = (props: Props) => {
  return (
      <View>
          <RegisterComp/>
    </View>
  )
}

export default RegisterScreen