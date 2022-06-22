import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home/HomeScreen';
import Notifications from '../../screens/Home/Notifications';
import History from '../../screens/Home/History';
import AccountDetails from '../../screens/Home/AccountDetails';
import OperationDetails from '../../screens/Home/OperationDetails';
import MyData from '../../screens/Home/MyData';
import Transfer from '../../screens/Home/Transfer';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OperationDetails"
        component={OperationDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyData"
        component={MyData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
