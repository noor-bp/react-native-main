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
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

const OTP_VerificationSchema = Yup.object().shape({
  pin1: Yup.string().min(1).max(1).required('Please enter your otp'),
  pin2: Yup.string().min(1).max(1).required('Please enter your otp'),
  pin3: Yup.string().min(1).max(1).required('Please enter your otp'),
  pin4: Yup.string().min(1).max(1).required('Please enter your otp'),
});

interface Props {}

const OTP_VerificationComp = ({}: Props) => {
  interface User {
    pin1: any;
    pin2: any;
    pin3: any;
    pin4: any;
  }
  const initialValues: User = {
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
  };
  const [user, setUser] = useState(initialValues);

  // const handleOnUserChange = <P extends keyof User>(
  //   prop: P,
  //   value: User[P],
  // ) => {
  //   setUser({...user, [prop]: value});
  // };

  // React.RefObject<HTMLDivElement>;
  const pin1Ref: any = React.useRef(null);
  const pin2Ref: any = React.useRef(null);
  const pin3Ref: any = React.useRef(null);
  const pin4Ref: any = React.useRef(null);

  const navigation: any = useNavigation();

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    submitCount,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: OTP_VerificationSchema,
    onSubmit: values => {
      console.warn(values);
    },
  });
  const autoFocusNextField = (nextFieldRef: any) => {
    if (nextFieldRef.current) {
      nextFieldRef.current.focus();
    }
  };
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
            value={values.pin1}
            onBlur={handleBlur('pin1')}
            // handleChange={handleChange('pin1')}
            // onChangeText={(pin1: any) => {
            //   // setUser(pin1);
            //   // if (pin1 != ('' || 0)) {
            //   //   if (pin2Ref.current) {
            //   //     pin2Ref.current?.focus();
            //   //   }
            //   // }
            //   handleChange('pin1');
            // }}
            // onChangeText={handleChange('pin1')}
            onChangeText={text => {
              handleChange('pin1')(text);
              if (text.length === 1) {
                autoFocusNextField(pin2Ref);
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
            value={values.pin2}
            onBlur={handleBlur('pin2')}
            // handleChange={handleChange('username')}
            // onChangeText={(pin2: any) => {
            //   setUser(pin2);
            //   if (pin2 != ('' || 0)) {
            //     if (pin3Ref.current) {
            //       pin3Ref.current?.focus();
            //     }
            //   }
            //   if (pin2 == ('' || 0)) {
            //     if (pin1Ref.current) {
            //       pin1Ref.current?.focus();
            //     }
            //   }
            //   handleChange('pin2');
            // }}
            // onChangeText={handleChange('pin2')}
            onChangeText={text => {
              handleChange('pin2')(text);
              if (text.length === 1) {
                autoFocusNextField(pin3Ref);
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
            value={values.pin3}
            onBlur={handleBlur('pin3')}
            // handleChange={handleChange('username')}
            // onChangeText={(pin3: any) => {
            //   setUser(pin3);
            //   if (pin3 != ('' || 0)) {
            //     if (pin4Ref.current) {
            //       pin4Ref.current?.focus();
            //     }
            //   }
            //   if (pin3 == ('' || 0)) {
            //     if (pin2Ref.current) {
            //       pin2Ref.current?.focus();
            //     }
            //   }
            //   handleChange('pin3');
            // }}
            onChangeText={text => {
              handleChange('pin3')(text);
              if (text.length === 1) {
                autoFocusNextField(pin4Ref);
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
            value={values.pin4}
            onBlur={handleBlur('pin4')}
            // onChangeText={(pin4: any) => {
            //   setUser(pin4);
            //   if (pin4 == ('' || 0)) {
            //     if (pin3Ref.current) {
            //       pin3Ref.current?.focus();
            //     }
            //   }
            //   handleChange('pin4');
            // }}
            onChangeText={handleChange('pin4')}
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
          handleSubmit={() => {
            handleSubmit();
            navigation.navigate('CreateNewPassword');
          }}
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