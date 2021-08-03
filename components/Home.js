import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({navigation, route, user}) => {
    
    
    console.log(user)
    return (
        <View>
            <Text>Welcome to the app {user.user.username}.  </Text>
            <Text>your email is: {user.user.email}.</Text>
            <Text>You created your account at:{user.user.created_at}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
