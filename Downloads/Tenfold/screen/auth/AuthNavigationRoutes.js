import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigationRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                    // title: 'Login'
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{
                    // title: 'Register',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigationRoutes;