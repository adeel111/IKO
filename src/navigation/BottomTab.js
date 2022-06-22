import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5';

import {moderateScale} from '../Theme/Dimensions';

import HomeStack from './stacks/HomeStack';
import Theme from '../Theme/Theme';
import Payments from '../screens/Payments';
import Offers from '../screens/Offers';
import More from '../screens/More';
import MyProducts from '../screens/MyProducts';

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarLabelStyle: {
          fontFamily: Theme.fontFamily.regular,
          fontSize: moderateScale(10),
          top: moderateScale(-7),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#043570',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: focus => (
            <MaterialCommunityIcons
              name="home-outline"
              color={focus.focused ? '#043570' : 'grey'}
              size={focus.focused ? moderateScale(25) : moderateScale(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#043570',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: focus => (
            <FontAwesome5Pro
              name="exchange-alt"
              color={focus.focused ? '#043570' : 'grey'}
              size={focus.focused ? moderateScale(25) : moderateScale(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Products"
        component={MyProducts}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#043570',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: focus => (
            <AntDesign
              name="wallet"
              color={focus.focused ? '#043570' : 'grey'}
              size={focus.focused ? moderateScale(25) : moderateScale(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#043570',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: focus => (
            <SimpleLineIcons
              name="bag"
              color={focus.focused ? '#043570' : 'grey'}
              size={focus.focused ? moderateScale(25) : moderateScale(22)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#043570',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: focus => (
            <Entypo
              name="dots-three-horizontal"
              color={focus.focused ? '#043570' : 'grey'}
              size={focus.focused ? moderateScale(25) : moderateScale(22)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: moderateScale(55),
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    width: width,
    paddingHorizontal: (width / 100) * 5,
    backgroundColor: 'white',
    elevation: moderateScale(2),
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '20%',
  },
  userName: {
    backgroundColor: '#F2F2F2',
    height: moderateScale(35),
    width: moderateScale(35),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(16),
  },
  headerTag: {
    textAlign: 'center',
    fontFamily: Theme.fontFamily.regular,
    color: 'black',
    fontSize: moderateScale(17),
  },
  demo: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(2),
    color: '#E3545D',
    fontFamily: Theme.fontFamily.regular,
  },
});
export default BottomTab;
