import React, { useState } from 'react'
import {
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import BlackBlueTextButton from '../CustomComponents/BlackBlueTextButton';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton';
import GrayH1Description from '../CustomComponents/GrayH1Description';
import {useNavigation} from '@react-navigation/native';
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Please enter your valid email address'),
});
interface Props {}

const ForgotPasswordComp = ({}: Props) => {
  // interface  User {
  //       email: string;
  //   }
  //       const defaultUser: User = {
  //         email: '',
  //       };
  //       const [user, setUser] = useState(defaultUser);

  //       const handleOnUserChange = <P extends keyof User>(
  //         prop: P,
  //         value: (User)[P],
  //       ) => {
  //         setUser({...user, [prop]: value});
  //       };

  //       const handleSubmit = () => {
  //         console.log(user);
  //       };

  const navigation: any = useNavigation();

  interface User {
    email: string;
  }

  const initialValues: User = {
    email: '',
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
    validationSchema: ForgotPasswordSchema,
    onSubmit: values => {
      console.warn(values);
    },
  });

  return (
    <SafeAreaView>
      <BackBtn_Heading title={'Forgot Password?'} />
      <View style={{marginHorizontal: 20}}>
        <GrayH1Description
          title=" Don't worry! It occurs. Please enter the email address linked with
          your account."
        />
      </View>
      <View style={{marginTop: 30}}>
        <CustomTextField
          placeholderTitle="Enter your email"
          value={values.email}
          // handleChange={(e: any) => handleOnUserChange('email', e.target.value)}
          onBlur={handleBlur('email')}
          handleChange={handleChange('email')}
        />
        {submitCount > 0 && touched.email && errors.email && (
          <Text style={styles.ErrorText}>{errors.email}</Text>
        )}
      </View>
      <View>
        <FullWidthBlackButton
          title="Send Code"
          handleSubmit={() => {
            handleSubmit();
            navigation.navigate('OTP');
          }}
        />
      </View>

      <View>
        <BlackBlueTextButton
          blackTitle="Remember Password"
          blueTitle="Login"
          handleClick={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordComp