import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({navigation, route}) => {
    const user = route.params;
    console.log(user.content.username)
    return (
        <View>
            <Text> You have successfully Registered an Account {JSON.stringify(user.content.username)}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
