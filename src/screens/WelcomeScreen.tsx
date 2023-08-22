import React from 'react'
import { Text } from 'react-native'
import WelcomeComp from '../components/WelcomeComp'

type Props = {}


const WelcomeScreen:React.FC = (props: Props) => {
  return (
<Text><WelcomeComp/></Text>  )
}

export default WelcomeScreen