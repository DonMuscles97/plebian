import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let user = {
      
      email: email,
      password: password,
    }


    const LoginUser = (user) => {

      
      (async () => {
        const rawResponse = await fetch('http://192.168.1.75:8000/api/login', {
          
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
        });
        const content = await rawResponse.json();
      
        console.log(content);

      })();
      
    }


    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>

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

         <Button title="Login" 
          onPress={() => LoginUser(user)}
          />

        <Button title="Click here to register" 
        onPress={() => navigation.navigate('Register')}
        />
        {/* <Button style={styles.login} color="#841584" title="Go to Login"  /> */}
        </View>
    )
}

export default Login

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

