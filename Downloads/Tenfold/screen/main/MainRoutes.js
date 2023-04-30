import React, { useEffect, useState, createRef } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Tabbar from "@mindinventory/react-native-tab-bar-interaction";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeScreen from './HomeScreen';

const MainRoutes = ({navigation}) => {
    // const tabs = [
    //     {
    //     //   name: 'Home',
    //       id: 'Home',
    //       activeIcon: <Icon name="home" color="#fff" size={25} />,
    //       inactiveIcon: <Icon name="home" color="#B2B2B2" size={25} />
    //     },
    //     {
    //     //   name: 'Plus',
    //       id: 'Plus',
    //       activeIcon: <Icon name="plus" color="#fff" size={25} />,
    //       inactiveIcon: <Icon name="plus" color="#B2B2B2" size={25} />
    //     },
    //     {
    //     //   name: 'User',
    //       id: 'User',
    //       activeIcon: <Icon name="user" color="#fff" size={25} />,
    //       inactiveIcon: <Icon name="user" color="#B2B2B2" size={25} />
    //     },      
    // ];

    return (
        // <Tabbar
        //     tabs={tabs}
        //     tabBarContainerBackground='rgba(65, 65, 65, 0.4)'
        //     tabBarBackground='#fff'
        //     activeTabBackground='#502380'
        //     labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
        //     onTabChange={(val) => console.log(val.id)}
        // />
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#5F0B65',
                tabBarActiveBackgroundColor: '#5F0B65',
                tabBarInactiveBackgroundColor: 'red',
            }}
            tabBarIcon={(props) => (
                <BottomFabBar
                    mode={'square' | 'default'}
                    isRtl={false}
                    // Add Shadow for active tab bar button
                    focusedButtonStyle={{
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 7,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,
                        elevation: 14,
                    }}
                    // - You can add the style below to show screen content under the tab-bar
                    // - It will makes the "transparent tab bar" effect.
                    bottomBarContainerStyle={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                    {...props}
                />
            )}
            >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused == true ? <Icon name="home" color="#fff" size={25} /> : <Icon name="home" color="#fff" size={25} />
                    },
                    headerShown: false
                }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="Plus"
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused == true ? <Icon name="home" color="#fff" size={25} /> : <Icon name="home" color="#fff" size={25} />
                    }
                }}
                component={HomeScreen}
            />
            {/* <Tab.Screen
                name="Settings"
                options={{
                    tabBarIcon: tabBarIcon('rocket1'),
                    tabBarActiveBackgroundColor: '#45014A',
                    tabBarActiveTintColor: 'purple',
                }}
                component={SettingsScreen}
            /> */}
        </Tab.Navigator>
    );
}

export default MainRoutes;

const styles = StyleSheet.create({
    
});