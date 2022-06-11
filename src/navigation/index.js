import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import AuthScreen from '../screens/AuthScreen';
import SelfieAccount from '../screens/SelfieAccount';
import DemoScreen from '../screens/DemoScreen';
import ExchangeRateScreen from '../screens/ExchangeRateScreen';
import CustomizeQuickAccess from '../screens/CustomizeQuickAccess';
import AboutIKO from '../screens/AboutIKO';
import IKOManual from '../screens/IKOManual';
import IKOSafetyRules from '../screens/IKOSafetyRules';
import IKOPrivacyPolicy from '../screens/IKOPrivacyPolicy';
import Contact from '../screens/Contact';
import BottomTab from './BottomTab';

const MainNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="SelfieAccount" component={SelfieAccount} />
      <Stack.Screen name="DemoScreen" component={DemoScreen} />
      <Stack.Screen name="ExchangeRateScreen" component={ExchangeRateScreen} />
      <Stack.Screen
        name="CustomizeQuickAccess"
        component={CustomizeQuickAccess}
      />
      <Stack.Screen name="AboutIKO" component={AboutIKO} />
      <Stack.Screen name="IKOManual" component={IKOManual} />
      <Stack.Screen name="IKOSafetyRules" component={IKOSafetyRules} />
      <Stack.Screen name="IKOPrivacyPolicy" component={IKOPrivacyPolicy} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default MainNav;
