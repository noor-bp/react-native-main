import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

type Props = {
    blackTitle?: string;
  blueTitle?: string;
  handleClick?: () => void;
}

const BlackBlueTextButton = (props: Props) => {
  return (
    <View>
      <Pressable style={styles.btn} onPress={props.handleClick}>
        <View style={styles.btnView}>
          <Text style={styles.btnTextBlack}>
            {props.blackTitle && props.blackTitle} &nbsp;
            
              {props.blueTitle && (
                <Text style={[styles.btnText]}>{props.blueTitle}</Text>
              )}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default BlackBlueTextButton