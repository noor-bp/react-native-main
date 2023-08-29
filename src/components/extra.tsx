import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  Email: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your email address'),
  Password: Yup.string()
    .min(8)
    .required('Please enter your password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    ),
});
const LoginScreen = ({navigation}: any) => {
  const SaveData = (values: any) => {
    // saveUser(values);
    navigation.replace('Home');
    // navigation.navigate("Home")
  };
  return (
    <Formik
      initialValues={{
        Email: '',
        Password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={SaveData}>
      {({
        values,
        errors,
        touched,
        setFieldTouched,
        isValid,
        handleSubmit,
        setFieldValue,
        handleChange,
      }) => (
        <View style={style.loginContainer}>
          <Image
            style={style.mainImg}
            source={require('./assets/rn-social-logo.png')}
          />
          <Text style={style.RNheading}>RN Social App</Text>
          <TextInput
            style={style.loginInput}
            placeholder="Enter Email"
            placeholderTextColor="black"
            value={values.Email}
            onChangeText={handleChange('Email')}
          />
          {touched.Email && errors.Email && (
            <Text style={style.ErrorText}>{errors.Email}</Text>
          )}
          <TextInput
            style={style.loginInput}
            placeholder="Enter Password"
            placeholderTextColor="black"
            value={values.Password}
            onChangeText={handleChange('Password')}
            secureTextEntry={true}
          />
          {touched.Password && errors.Password && (
            <Text style={style.ErrorText}>{errors.Password}</Text>
          )}
          {/*
            <TouchableOpacity style={style.loginBtn, { backgroundColor: isValid ? '#6495ED' : '#A5C9CA' }}
            onPress={()=>SaveData()} disabled={!isValid}>
              <Text style={{fontSize:20, color:'#ffff'}}>Log In</Text>
            </TouchableOpacity> */}
          <View style={style.loginBtn}>
            <Button
              title="Login In"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Text style={style.forgetPass}>Forget Password</Text>
          </TouchableOpacity>
          {/* Social Link */}
          <TouchableOpacity style={style.socailFacBtn} onPress={() => {}}>
            <FontAwesome name="facebook" color="blue" size={24} />
            <Text style={{paddingHorizontal: 20, color: 'blue'}}>
              Sign In With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.socailGooBtn} onPress={() => {}}>
            <FontAwesome name="google" color="red" size={24} />
            <Text style={{paddingHorizontal: 20, color: 'red'}}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
          {/* Social Link */}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={style.creatNewAccnt}>
              Don't have an account? Create here
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
const style = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '  #F4F0F0',
    marginTop: '12%',
  },
  mainImg: {
    width: 150,
    height: 150,
    marginLeft: '35%',
    marginTop: 2,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    margin: 9,
    width: 300,
    borderRadius: 5,
    marginLeft: 30,
    paddingLeft: 5,
    color: 'black',
  },
  loginBtn: {
    margin: 5,
    padding: 20,
  },
  RNheading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000066',
    marginBottom: 20,
  },
  forgetPass: {
    textAlign: 'center',
    fontSize: 15,
    color: '#3399FF',
    fontWeight: 'bold',
    marginTop: -5,
  },
  creatNewAccnt: {
    textAlign: 'center',
    fontSize: 15,
    color: '#3399FF',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
  },
  socailFacBtn: {
    backgroundColor: '#D2D1FF',
    margin: 16,
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socailGooBtn: {
    backgroundColor: '#FFADAA',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ErrorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 30,
    marginTop: -8,
  },
});
export default LoginScreen;
