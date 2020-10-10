import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Header from 'react-native-elements'

import ReadScreen from './screens/readScreen'
import WriteScreen from './screens/writeScreen'
import MyHeader from './components/myheader'
import { render } from 'react-dom';
 
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MyHeader/>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen}
},
{
  defaultNavigationOptions:({navigation}) =>{
    const routeName = navigation.state
    if(routeName === "Read"){
      return(
        <Image source={require("./assets/open book.jpg")}/>
      )
    }else if(routeName === "Write"){
      return(
        <Image source={require("./assets/depositphotos_72594121-stock-illustration-feather-writing.jpg")}/>
      )
    }
  }
}
)


const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
