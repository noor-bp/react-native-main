import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

type Props = {
    title: string;
}

const GrayH1Description = (props: Props) => {
  return (
    <View>
      <Text style={styles.textDesc}>
        {props.title}
      </Text>
    </View>
  );
}

export default GrayH1Description