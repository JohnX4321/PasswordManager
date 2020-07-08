import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationContainer from '@react-navigation/native';

const Tab=createBottomTabNavigator();

function MyTabs() {

    return(

        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: '#e91e63'}}>

            <Tab.Screen name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({tintColor})=>(
                                <MatComIcons name="home" color={tintColor} size={24}/>
                            )
                        }} />

                        <Tab.Screen name="Add"
                                    component={Add}
                                    options={{
                                        tabBarLabel: 'Add New Block',
                                        tabBarIcon: ({tintColor})=>(
                                            <Ionicons name="add-circle-outline" color={tintColor} size={24} />
                                        )
                                    }} />

                                    <Tab.Screen name="Settings"
                                                component={Settings}
                                                options={{
                                                    tabBarLabel: 'Settings',
                                                    tabBarIcon: ({tintColor})=>(
                                                        <Ionicons name="settings-outline" color={tintColor} size={24} />
                                                    )
                                                }} />

        </Tab.Navigator>
        </NavigationContainer>
    );

}

const AppContainer=createA
