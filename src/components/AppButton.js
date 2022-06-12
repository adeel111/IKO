import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from '../Theme/Dimensions';

const AppButton = ({
  width = '90%',
  icon = '',
  lable,
  bgColor = '#043570',
  textSize = 15,
  textColor = 'white',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonContainer(bgColor, width)}>
      {icon === 'settings' ? (
        <Ionicons
          name="settings-outline"
          color="gray"
          size={moderateScale(20)}
          style={{marginRight: 10}}
        />
      ) : icon === 'logout' ? (
        <AntDesign
          name="logout"
          color="white"
          size={moderateScale(20)}
          style={{marginRight: 10}}
        />
      ) : null}
      <Text style={styles.buttonTextStyle(textSize, textColor)}>{lable}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: (bgColor, width) => {
    return {
      width: width,
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 12,
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: 'lightgray',
      justifyContent: 'center',
      backgroundColor: bgColor,
      marginTop: 15,
    };
  },
  buttonTextStyle: (textSize, textColor) => {
    return {
      fontSize: textSize,
      color: textColor,
    };
  },
});

export default AppButton;
