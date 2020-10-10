import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View>
                <TextInput multiline={true} style={{borderWidth:5, borderRadius:5}}></TextInput>
                <TouchableOpacity style={{backgroundColor:"blue", alignContent:"center", alignSelf:"center", alignItems:"center"}}><Text>Submit Story</Text></TouchableOpacity>
            </View>
        )
    }
}