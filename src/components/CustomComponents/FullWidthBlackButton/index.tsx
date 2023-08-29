import React from 'react'
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  handleSubmit?: any;
};

const FullWidthBlackButton = (props: Props) => {
  return (
    <View>
      <Pressable
        style={styles.loginBtn}
        onPress={
          props.handleSubmit as (
            values:
              | GestureResponderEvent
              | React.FormEvent<HTMLFormElement>
              | undefined,
          ) => void
        }>
        <View style={styles.loginBtnView}>
          <Text style={styles.loginBtnText}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FullWidthBlackButton