/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';

import {SwitchNavigator, createDrawerNavigator} from 'react-navigation'
import SplashScreen from '../containers/SplashScreen'
import DrawerContainer from '../components/DrawerContainer'

import Home from '../containers/Home'

const  AppStack = createDrawerNavigator(
  { 
    //Home: () => <View style={{flex:1}}><Text>The Home</Text></View>,
        Home: Home
    },
  {
    contentComponent: ({navigation}) => <DrawerContainer  navigation={navigation}/>
  }
);

export default AppNavigator = SwitchNavigator(
  {
    SplashLoading: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'SplashLoading',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
console.disableYellowBox = true;
AppRegistry.registerComponent('Twitter', () => AppNavigator);
