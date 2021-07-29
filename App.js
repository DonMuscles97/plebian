// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import * as SecureStore from 'expo-secure-store';


const Stack = createStackNavigator();



function App() {

  const [status, setStatus] = useState(false);
  const [storage, setStorage] = useState('');

  
  const checkStorage = async () => {
    let local =  await SecureStore.getItemAsync('login_info')
    // console.log(local)
     setStorage(local)
    
    
  }

    checkStorage()
  
console.log(storage)
  return (
    
    
    status == false && storage == null ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login">{props => <Login {...props} setStatus={setStatus} />}</Stack.Screen>          
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Home" component={Home} />   
        </Stack.Navigator>
        </NavigationContainer>
    )
  );
}



export default App;