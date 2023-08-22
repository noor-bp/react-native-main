import React, {MutableRefObject, useRef, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import BlackBlueTextButton from '../CustomComponents/BlackBlueTextButton';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton';
import GrayH1Description from '../CustomComponents/GrayH1Description';
import styles from './styles';
import Color from '../../constants/Color';
import { useNavigation } from '@react-navigation/native';

interface Props {
  
}

const OTP_VerificationComp = ({}: Props) => {
  interface User {
    pin1: any;
    pin2: any;
    pin3: any;
    pin4: any;
  }
  const defaultUser: User = {
    pin1: null,
    pin2: null,
    pin3: null,
    pin4: null,
  };
  const [user, setUser] = useState(defaultUser);

  const handleOnUserChange = <P extends keyof User>(
    prop: P,
    value: User[P],
  ) => {
    setUser({...user, [prop]: value});
  };
  const handleSubmit = () => {
    console.log(user);
  };
// React.RefObject<HTMLDivElement>;
  const pin1Ref:any= React.useRef(null);
  const pin2Ref:any = React.useRef(null);
  const pin3Ref:any = React.useRef(null);
  const pin4Ref: any = React.useRef(null);
  
  const navigation:any = useNavigation()

  return (
    <SafeAreaView>
      <BackBtn_Heading title={'OTP Verification'} />
      <View style={{marginHorizontal: 20}}>
        <GrayH1Description title="Enter the verification code we just sent on your email address." />
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
        }}>
        <View>
          <TextInput
            value={user.pin1}
            onChangeText={(pin1: any) => {
              setUser(pin1);
              if (pin1 != ('' || 0)) {
                if (pin2Ref.current) {
                  pin2Ref.current?.focus();
                }
              }
            }}
            maxLength={1}
            ref={pin1Ref}
            style={[
              styles.pin1Input,
              {borderColor: Color.primary, backgroundColor: Color.white},
            ]}
          />
        </View>
        <View>
          <TextInput
            value={user.pin2}
            onChangeText={(pin2: any) => {
              setUser(pin2);
              if (pin2 != ('' || 0)) {
                if (pin3Ref.current) {
                  pin3Ref.current?.focus();
                }
              }
              if (pin2 == ('' || 0)) {
                if (pin1Ref.current) {
                  pin1Ref.current?.focus();
                }
              }
            }}
            maxLength={1}
            ref={pin2Ref}
            style={[
              styles.pin1Input,
              {borderColor: Color.primary, backgroundColor: Color.white},
            ]}
          />
        </View>
        <View>
          <TextInput
            maxLength={1}
            value={user.pin3}
            onChangeText={(pin3: any) => {
              setUser(pin3);
              if (pin3 != ('' || 0)) {
                if (pin4Ref.current) {
                  pin4Ref.current?.focus();
                }
              }
              if (pin3 == ('' || 0)) {
                if (pin2Ref.current) {
                  pin2Ref.current?.focus();
                }
              }
            }}
            ref={pin3Ref}
            style={[
              styles.pin1Input,
              {borderColor: Color.primary, backgroundColor: Color.white},
            ]}
          />
        </View>
        <View>
          <TextInput
            maxLength={1}
            value={user.pin4}
            onChangeText={(pin4: any) => {
              setUser(pin4);
              if (pin4 == ('' || 0)) {
                if (pin3Ref.current) {
                  pin3Ref.current?.focus();
                }
              }
            }}
            ref={pin4Ref}
            style={[
              styles.pin1Input,
              {borderColor: Color.primary, backgroundColor: Color.white},
            ]}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <FullWidthBlackButton
          title="Verify"
          handleSubmit={() => navigation.navigate('CreateNewPassword')}
        />
      </View>

      <View>
        <BlackBlueTextButton
          blackTitle="Didn't received code?"
          blueTitle="Resend"
        />
      </View>
    </SafeAreaView>
  );
};

export default OTP_VerificationComp;