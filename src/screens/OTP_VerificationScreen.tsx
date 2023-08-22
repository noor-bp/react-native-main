import React from 'react'
import { View } from 'react-native'
import OTP_VerificationComp from '../components/OTP_VerificationComp'

type Props = {}

const OTP_VerificationScreen:React.FC = (props: Props) => {
  return (
      <View>
          <OTP_VerificationComp/>
    </View>
  )
}

export default OTP_VerificationScreen