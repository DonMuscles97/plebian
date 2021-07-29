import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({navigation, route}) => {
    const user = route.params;
    console.log()
    return (
        <View>
            <Text> The home screen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
