import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setConfirmPassword] = useState('')
    const [username, setUserName] = useState('')

    let user = {
      
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    const passwordCheck = (user) => {
        RegisterUser(user)
      
    }

    const RegisterUser = (user) => {

      
      (async () => {
        const rawResponse = await fetch('http://192.168.1.168:8000/api/register', {
          
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
        });
        const content = await rawResponse.json();
        
        if (content['error'])
        {
          alert(content['error'])
        }
        else
        {
          console.log(content)
          alert('Account Created')
          navigation.navigate('Login', {content})
        }
        console.log();
        // alert(content.password)
        
      })();
      
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input} 
                placeholder="Username"
                placeholderTextColor='#ffffff'
                onChangeText={(val) => setUserName(val)}

            />

            <TextInput
                style={styles.input} 
                placeholder="Email"
                placeholderTextColor='#ffffff'
                onChangeText={(val) => setEmail(val)}
            />

            <TextInput
                style={styles.input} 
                placeholder="Password"
                placeholderTextColor='#ffffff'
                onChangeText={(val) => setPassword(val)}
            />

            <TextInput
                style={styles.input} 
                placeholder="Confirm Password"
                placeholderTextColor='#ffffff'
                onChangeText={(val) => setConfirmPassword(val)}
            />
         <Button title="Register" 
          onPress={() => passwordCheck(user)}
          // onPress={() => }
          />
        {/* <Button style={styles.login} color="#841584" title="Go to Login"  /> */}
        </View>
    )
}

export default Register

// console.log(user);

const styles = StyleSheet.create({

    login: {
        color: 'red',
        marginTop: 20,
    },

    container: {
      flex: 1,
      backgroundColor: '#464646',
      alignItems: 'center',
      paddingTop: 20,
    //   justifyContent: 'center',
    },
  
    logo: {
      width: 300,
      height: 160,
      bottom: 0 
    },

    input: {
      height: 40,
      backgroundColor: '#545454',
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 50,
      padding: 10,
      borderRadius: 10,
      width: 300,
      color: 'white',
      shadowOffset: {
        width: 10,
        height: 10
      },
      shadowColor: 'black'
    }
  });

