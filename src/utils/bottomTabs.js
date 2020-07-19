import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationContainer from '@react-navigation/native';
import HomeScreen from '../screen/homeScreen';
import AddScreen from '../screen/addScreen';
import SettingsScreen from '../screen/settingsScreen';

const Tab=createBottomTabNavigator();

 class MyTabs extends React.Component{

     render() {


         return (


                 <Tab.Navigator
                     initialRouteName="Home"
                     tabBarOptions={{activeTintColor: '#e91e63'}}>

                     <Tab.Screen name="Home"
                                 component={HomeScreen}
                                 options={{
                                     tabBarLabel: 'Home',
                                     tabBarIcon: ({color}) => (
                                         <MaterialCommunityIcons name="home" color={color} size={24}/>
                                     )
                                 }}/>

                     <Tab.Screen name="Add"
                                 component={AddScreen}
                                 options={{
                                     tabBarLabel: 'Add New Block',
                                     tabBarIcon: ({tintColor}) => (
                                         <Ionicons name="add-circle-outline" color={tintColor} size={24}/>
                                     )
                                 }}/>

                     <Tab.Screen name="Settings"
                                 component={SettingsScreen}
                                 options={{
                                     tabBarLabel: 'Settings',
                                     tabBarIcon: ({tintColor}) => (
                                         <Ionicons name="settings-outline" color={tintColor} size={24}/>
                                     )
                                 }}/>

                 </Tab.Navigator>

         );
     }

}

export default MyTabs;
