import React, {ChangeEvent, useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Please enter your valid email address'),
  password: Yup.string()
    .required('Please enter your valid password')
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number'),
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      // 'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
      'Please enter your valid password',
    ),
});

type Props = {};

export default function LoginComp({}: Props) {
  const navigation: any = useNavigation();

  interface User {
    email: string;
    password: string;
  }

  const initialValues: User = {
    email: '',
    password: '',
  };

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
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.warn(values);
    },
  });

  return (
    <SafeAreaView>
      <View style={{backgroundColor: Color.white}}>
        <BackBtn_Heading
          title={'Welcome back! Glad to see you, Again!'}
          handleClick={() => navigation.goBack()}
        />
        <View style={{marginTop: 20, marginBottom: 20}}>
          <CustomTextField
            placeholderTitle="Enter your email"
            value={values.email}
            onBlur={handleBlur('email')}
            handleChange={handleChange('email')}
          />
          {submitCount > 0 && touched.email && errors.email && (
            <Text style={styles.ErrorText}>{errors.email}</Text>
          )}
        </View>

        <View>
          <CustomTextField
            placeholderTitle="Enter your password"
            hasPassword={true}
            onBlur={handleBlur('password')}
            value={values.password}
            handleChange={handleChange('password')}
          />
          {submitCount > 0 && touched.password && errors.password && (
            <Text style={styles.ErrorText}>{errors.password}</Text>
          )}
        </View>

        <Pressable
          style={styles.textBtnDiv}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.textBtn}>Forgot Password?</Text>
        </Pressable>

        <Pressable
          style={styles.loginBtn}
          onPress={
            handleSubmit as (
              values:
                | GestureResponderEvent
                | React.FormEvent<HTMLFormElement>
                | undefined,
            ) => void
          }>
          <View style={styles.loginBtnView}>
            <Text style={styles.loginBtnText}>Login</Text>
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 20,
          }}>
          <View style={styles.loginDivider} />
          <View>
            <Text style={styles.loginDividerText}>Or Login with</Text>
          </View>
          <View style={styles.loginDivider} />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}>
          <View style={styles.logoIconsDiv}>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.logoIcons}
            />
          </View>
          <View style={[styles.logoIconsDiv, {marginLeft: 15}]}>
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.logoIcons}
            />
          </View>
          <View style={[styles.logoIconsDiv, {marginLeft: 15}]}>
            <Image
              source={require('../../assets/images/apple.png')}
              style={styles.logoIcons}
            />
          </View>
        </View>
        <Pressable
          style={styles.guestBtn}
          onPress={() => navigation.navigate('Register')}>
          <View style={styles.loginBtnView}>
            <Text style={styles.guestBtnTextBlack}>
              Don’t have an account?
              <Text style={styles.guestBtnText}> Register Now</Text>
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
