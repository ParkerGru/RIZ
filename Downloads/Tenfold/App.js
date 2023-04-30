import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Import Screens
import AuthNavigationRoutes from './screen/auth/AuthNavigationRoutes';
import MainRoutes from './screen/main/MainRoutes';
import HomeScreen from './screen/main/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AuthNavigationRoutes'
        // screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name='AuthNavigationRoutes' component={AuthNavigationRoutes} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;