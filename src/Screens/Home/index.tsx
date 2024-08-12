// src/Screens/Home/index.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';
import PersonalPage from '../PersonalPage/Navigation';
import AccountSignUp from '../AccountSignUp';
import HowSealWorks from '../HowSEALWorks';
import Break from '../Break'; // Import the Break screen

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeToSeal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeToSeal" component={WelcomeToSeal} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Personal" component={PersonalPage} />
      <Stack.Screen name="AccountSignUp" component={AccountSignUp} />
      <Stack.Screen name="HowSealWorks" component={HowSealWorks} />
      <Stack.Screen name="Break" component={Break} />
    </Stack.Navigator>
  );
};

export default Index;
