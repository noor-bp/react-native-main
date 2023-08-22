import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import Color from '../../../constants/Color'
import styles from './styles'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

type Props = {
  placeholderTitle: string;
  hasPassword?: boolean;
  hasEmail?: boolean | any;
  value?: any;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handleChange?: any;
};

export default function CustomTextField({placeholderTitle, handleChange, hasPassword, hasEmail, value}: Props) {
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const [typeing, setTypeing] = useState<string>("");

  const handleIconChange = () => {
    setHidePassword(curr => !curr);
  };

  useEffect(() => {
    console.log(typeing);
  }, [typeing]);
  
  return (
    <View style={styles.textInputDiv}>
      <TextInput
        value={typeing}
        onChangeText={text => setTypeing(text)}
        placeholder={placeholderTitle}
        placeholderTextColor={Color.gray}
        style={styles.textInput}
        keyboardType={hasEmail && 'email-address'}
        secureTextEntry={hasPassword && true}
      />
      {hasPassword && (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={handleIconChange}>
            {/* <FontAwesome5 name={hidePassword ? 'eye' : 'eye-slash'} /> */}
            <Image
              source={
                hidePassword
                  ? require('../../../assets/images/closedEye.png')
                  : require('../../../assets/images/eye.png')
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}