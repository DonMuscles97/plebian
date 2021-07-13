import React, {useState} from 'react';
import logo from '../assets/logo.png';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('don')
    const [password, setPassword] = useState('pass')
    const [isPending, setIsPending] = useState(false)

    let user = {
       email: email,
       password: password 
    }

    const stateCheck = (user) => {

      setIsPending(true)
      fetch('http://192.168.1.168:8000/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then((val) => {
        setIsPending(false)
        // console.log(val);
        alert('user created')
      }).catch(() => {
        setIsPending(false)
        alert("Can't Connect to Server")
      })
    }


    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <TextInput
                style={styles.input} 
                defaultValue={email}
                onChangeText={(val) => setEmail(val)}
            />
        { !isPending && <Button title="Register" onPress={() => stateCheck(user)} />}
        { isPending && <Button disabled title="Registering" onPress={() => stateCheck(user)} />}
        <Button style={styles.login} color="#841584" title="Go to Login" onPress={() => navigation.navigate('Login')} />
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
    //   backgroundColor: '#f0ead6',
      alignItems: 'center',
      paddingTop: 100,
    //   justifyContent: 'center',
    },
  
    logo: {
      width: 300,
      height: 150,
      bottom: 0 
    },

    input: {
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 100,
      padding: 10,
      borderRadius: 10,
      width: 300,
      color: 'black',
      shadowOffset: {
        width: 10,
        height: 10
      },
      shadowColor: 'black'
    }
  });

