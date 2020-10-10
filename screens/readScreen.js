import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{alignSelf:"center", marginTop:200}}>Read Story here</Text>
            </View>
        )
    }
}