import React, { useState } from 'react'
import {
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import BackBtn_Heading from '../CustomComponents/BackBtn_Heading';
import CustomTextField from '../CustomComponents/CustomTextField/CustomTextField';
import BlackBlueTextButton from '../CustomComponents/BlackBlueTextButton';
import FullWidthBlackButton from '../CustomComponents/FullWidthBlackButton';
import GrayH1Description from '../CustomComponents/GrayH1Description';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';

const CreateNewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Please enter your  password')
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number'),
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
  confirmPassword: Yup.string()
    .required('Please enter your  password')
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number'),
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
});

interface Props {}

const CreateNewPasswordComp = ({}: Props) => {
  interface User {
    newPassword: string;
    confirmPassword: string;
  }
  // const defaultUser: User = {
  //   newPassword: '',
  //   confirmPassword: '',
  // };
  // const [user, setUser] = useState(defaultUser);

  // const handleOnUserChange = <P extends keyof User>(
  //   prop: P,
  //   value: User[P],
  // ) => {
  //   setUser({...user, [prop]: value});
  // };

  const navigation: any = useNavigation();

  const initialValues: User = {
    newPassword: '',
    confirmPassword: '',
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
    validationSchema: CreateNewPasswordSchema,
    onSubmit: values => {
      console.warn(values);
    },
  });

  return (
    <SafeAreaView>
      <BackBtn_Heading title={'Create New Password'} />
      <View style={{marginHorizontal: 20}}>
        <GrayH1Description title="Your new password must be unique from those previously used." />
      </View>

      <View style={{marginTop: 30}}>
        <CustomTextField
          placeholderTitle="New Password"
          value={values.newPassword}
          // handleChange={(e: any) =>
          //   handleOnUserChange('newPassword', e.target.value)
          // }
          onBlur={handleBlur('newPassword')}
          handleChange={handleChange('newPassword')}
        />
        {submitCount > 0 && touched.newPassword && errors.newPassword && (
          <Text style={styles.ErrorText}>{errors.newPassword}</Text>
        )}
      </View>
      <View style={{marginTop: 20}}>
        <CustomTextField
          placeholderTitle="Confirm Password"
          value={values.confirmPassword}
          // handleChange={(e: any) =>
          //   handleOnUserChange('confirmPassword', e.target.value)
          // }
          onBlur={handleBlur('confirmPassword')}
          handleChange={handleChange('confirmPassword')}
        />
        {submitCount > 0 &&
          touched.confirmPassword &&
          errors.confirmPassword && (
            <Text style={styles.ErrorText}>{errors.confirmPassword}</Text>
          )}
      </View>
      <View style={{marginTop: 20}}>
        <FullWidthBlackButton
          title="Reset Password"
          // handleSubmit={() => navigation.navigate("PasswordChanged")}
          handleSubmit={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNewPasswordComp