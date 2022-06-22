import React from 'react';
import {StatusBar, View, Platform} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 35 : 0;

export const AppStatusBar = ({color = 'white'}) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: color,
        height: STATUS_BAR_HEIGHT,
      }}>
      <StatusBar
        barStyle={
          color === 'white'
            ? Platform.OS === 'ios'
              ? 'dark-content'
              : 'light-content'
            : 'light-content'
        }
      />
    </View>
  );
};

export default AppStatusBar;
