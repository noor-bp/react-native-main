import React from 'react'
import { View } from 'react-native'
import PasswordChangedComp from '../components/PasswordChangedComp'

type Props = {}

const PasswordChangedScreen:React.FC = (props: Props) => {
  return (
      <View>
          <PasswordChangedComp/>
    </View>
  )
}

export default PasswordChangedScreen