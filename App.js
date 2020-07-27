/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/utils/bottomTabs';
import {Router,Scene} from 'react-native-router-flux';
import MainScreen from './src/screen/mainScreen';
import FingerprintScreen from './src/screen/FingerprintScreen';


export default class App extends React.Component{

  render() {


    return (
      <Router>
        <Scene key="root">
        <Scene key="mainScreen" component={MainScreen} hideNavBar={true} initial={true}  />
        <Scene key="fingerprintScreen" component={FingerprintScreen}  />
        </Scene>
      </Router>

    );
  }
}




