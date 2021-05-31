import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabContainer} from 'react-navigation-tabs';
import {ReadStoryScreen} from './Screens/ReadStoryScreen';
import {WriteStoryScreen} from './Screens/WriteStoryScreen';

export default class App extends React.Component {

 
    render() {
      return (
        <View style={{flex:1}}>
          <Appcontainer />
        </View>
      )
    }
  }
  
  
  var switchContainer = createSwitchNavigator({
    ReadStoryScreen : ReadStoryScreen,
    WriteStoryScreen:WriteStoryScreen
  })
  const Appcontainer = createAppContainer(switchContainer)



