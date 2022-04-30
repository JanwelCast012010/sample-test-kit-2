import * as React from "react";
import {useEffect} from "react";
import {View,Image, StyleSheet, Text, TextInput, Alert, ScrollView} from "react-native";
import { ErrorMessage, Formik, prepareDataForValidation } from "formik";
import * as yup from 'yup';
import {Button} from "react-native-elements";
import ViewWithLoading from "../ViewWithLoading";



export default function Registrationform(){
  const [firstname, setfirstnameText] = React.useState<string>("");
  const [lastname, setlastnameText] = React.useState<string>("");
  const [emailaddress, setEmailAddressText] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmpassword, setConfirmPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  

  useEffect(() => {
    console.log(loading);
    setLoading(true);
    setTimeout(() => {
          setLoading(false);
    }, 3000);
}, [])


const registerSchema = yup.object({
  emailaddress: yup.string().required('Email is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)$/, 'Invalid email'),
  password: yup.string().required('Password is required'),
  ConfirmPassword: yup.string().required('Confirm your password')
  
})

  
  const handleRegistrationform = () => {
    if (password === confirmpassword){
      Alert.alert("Registered");
   }
   else{
     Alert.alert("Error", "Passwords do not match");
   }
   
 }
    return ( 
    <ViewWithLoading loading={loading}>
      <Formik       
                initialValues={{
                Emailaddress: '',
                Password: '',
                ConfirmPassword:''
              }}
              onSubmit={(values, action) => {
                console.log(values);
              }}
              validationSchema={registerSchema}
    
            >
              {({ handleChange, values, errors, touched, handleSubmit} ) => (
              
<View style={{
        flex: 1,
      }}>
         <Text style={{
        fontSize: 60,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: 90,
        marginLeft: -80,
        color: '#DD3453'
      }}>Create
      </Text>
      <Text style={{
        fontSize: 60,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: -90,
        marginLeft: 180,
        color: '#FDC307'
      }}>An
      </Text>
      <Text style={{
        fontSize: 60,
        fontFamily: 'poppins-bold',
        textAlign:'center', 
        marginTop: -40,
        color: '#DD3453'
      }}>Account
      </Text>
      <Text style={{
        fontSize: 15,
        fontFamily: 'poppins-regular',
        textAlign:'center', 
        marginTop:-20,
        color: '#FDC307'
      }}> Please signup to continue
      </Text>
      <ScrollView>
        <View style={{
          flex: 0,
          marginTop: 30,
        }}>
          <Text style={styles.textStyle
          }>First Name
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setfirstnameText}
          value={firstname}
          keyboardType={"default"}
          placeholder={"  Your first name"}
          autoCapitalize={"none"}
          />
        </View>
        <View style={{
          flex: 0,
          marginTop: 1,
        }}>
          <Text style={styles.textStyle
          }>Last Name
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setlastnameText}
          value={lastname}
          keyboardType={"default"}
          placeholder={"Your last name"}
          autoCapitalize={"none"}
          />
        </View>
<View style={{
          flex: 0,
          marginTop: 1,
        }}>
          <Text style={styles.textStyle
          }>Email Address
          </Text>
          <TextInput style={styles.input}
          value={values.Emailaddress}
          onChangeText={setEmailAddressText}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          placeholder={"  Your email address"}
          />
          {errors.Emailaddress &&
          <Text style= {{marginVertical:10, color: 'pink'}}>
            {errors.Emailaddress}
          </Text>
}
        </View>
        <View style={{
          flex: 0,
          marginBottom: 20
        }}>
          <Text style={styles.textStyle
          }>Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('Password')}
          value={values.Password}
          keyboardType={"visible-password"}
          placeholder={"  Your password"}
          secureTextEntry={true}
          />
          <View style={{
          flex: 0,
          marginBottom: 20
        }}>
          <Text style={styles.textStyle
          }>Confirm Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('ConfirmPassword')}
          value={values.ConfirmPassword}
          keyboardType={"visible-password"}
          placeholder={"  Your password"}
          secureTextEntry={true}
          />
          <View style={{
            flex: 0
          }}>
            <Button
            title={"Register"}
            titleStyle={{
              fontFamily: 'poppins-bold',
              fontSize:14,
              color: '#ffffff',
              marginVertical: 1,
              
            }}
            buttonStyle={{
              backgroundColor: '#E13257',
              borderRadius: 20,
              marginTop: 20,
             
            }}
            type={"solid"}
            onPress={handleRegistrationform}
            />
            <View style={{
            }}>
            </View>
          </View>
          </View>
        </View>
        </ScrollView>
        </View> 
              )} 
        </Formik>
        </ViewWithLoading>

              );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#ffecd1',
            justifyContent: 'center',
            paddingHorizontal: 20,
        
          },
        textStyle:{
        textAlign: "left",
        fontFamily: 'poppins-regular',
        fontSize: 15,
        color: '#4F5558',
        
       
        },
          
        input:{
          height: 40,
          width: '100%',
          marginBottom: 10,
          borderWidth: 0,
          borderRadius: 10,
          justifyContent: "center",
          backgroundColor: '#EDEDED',
        },

      });
      