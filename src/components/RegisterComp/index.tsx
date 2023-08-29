import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long')
    .required('Please enter your username'),
  email: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Please enter valid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .min(8)
    .required('Please enter your password')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number'),
  // .matches(
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  //   'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  // ),
  confirmPassword: Yup.string()
    // .min(8)
    .required('Please enter your confirm password')
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    //   'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    // ),
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number'),
});

interface Props {}

const RegisterComp = ({}: Props) => {
  interface User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const defaultUser: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [user, setUser] = useState(defaultUser);

  // const handleOnUserChange = (prop: keyof typeof User, value: any) => {
  //     setUser({...user, [prop] : value})
  // }

  // const handleOnUserChange = <P extends keyof User>(
  //   prop: P,
  //   value: User[P],
  // ) => {
  //   setUser({...user, [prop]: value});
  // };

  // const handleSubmit = () => {
  //   console.log(user);
  // };

  // const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //     setPassword(e.target.value);
  //     console.warn(e.target.value);
  // };

  //   const handleInputChange: React.ChangeEventHandler<HTM  LInputElement> = event => {
  //     setPassword(event.target.value);
  //   };

  // const handleInputChange :

  const navigation: any = useNavigation();

  const initialValues: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  interface formikProps {
    handleSubmit: (event: GestureResponderEvent) => void;
  }
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
    validationSchema: SignupSchema,
    onSubmit: values => {
      console.warn(values);
    },
  });

  return (
    <SafeAreaView>
      <View style={{backgroundColor: Color.white}}>
        <BackBtn_Heading title={'Hello! Register to get started'} />
        <View style={{marginTop: 0}}>
          <CustomTextField
            placeholderTitle="Username"
            // value={user.username}
            // handleChange={(e: any) =>
            //   handleOnUserChange('username', e.target.value)
            // }
            value={values.username}
            onBlur={handleBlur('username')}
            handleChange={handleChange('username')}
          />
        </View>
        {submitCount > 0 && touched.username && errors.username && (
          <Text style={styles.ErrorText}>{errors.username}</Text>
        )}
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Email"
            // value={user.email}
            // handleChange={(e: any) =>
            //   handleOnUserChange('email', e.target.value)
            // }
            onBlur={handleBlur('email')}
            value={values.email}
            handleChange={handleChange('email')}
          />
        </View>
        {submitCount > 0 && touched.email && errors.email && (
          <Text style={styles.ErrorText}>{errors.email}</Text>
        )}
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Password"
            hasPassword={true}
            // handleChange={handlePassword}
            // value={password}
            // value={user.password}
            // handleChange={(e: any) =>
            //   handleOnUserChange('password', e.target.value)
            // }
            onBlur={handleBlur('password')}
            value={values.password}
            handleChange={handleChange('password')}
          />
        </View>
        {submitCount > 0 && touched.password && errors.password && (
          <Text style={styles.ErrorText}>{errors.password}</Text>
        )}
        <View style={{marginTop: 20}}>
          <CustomTextField
            placeholderTitle="Confirm Password"
            hasPassword={true}
            // value={user.confirmPassword}
            // handleChange={(e: any) =>
            //   handleOnUserChange('confirmPassword', e.target.value)
            // }
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            handleChange={handleChange('confirmPassword')}
          />
        </View>
        {submitCount > 0 &&
          touched.confirmPassword &&
          errors.confirmPassword && (
            <Text style={styles.ErrorText}>{errors.confirmPassword}</Text>
          )}

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
            <Text style={styles.loginBtnText}>Register</Text>
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
            <Text style={styles.loginDividerText}>Or Register with</Text>
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
            marginTop: 0,
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
        <Pressable style={styles.guestBtn}>
          <View style={styles.loginBtnView}>
            <Text style={styles.guestBtnTextBlack}>
              Don’t have an account?
              <View style={{marginTop: 10}}>
                <Pressable
                  onPress={() => navigation.navigate('Login')}
                  style={{marginTop: 10}}>
                  <Text style={styles.guestBtnText}> Login Now</Text>
                </Pressable>
              </View>
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterComp