import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

type Props = {
    title: string;
    handleSubmit?: () => void;
}

const FullWidthBlackButton = (props: Props) => {
  return (
    <View>
      <Pressable style={styles.loginBtn} onPress={props.handleSubmit}>
        <View style={styles.loginBtnView}>
                  <Text style={styles.loginBtnText}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default FullWidthBlackButton