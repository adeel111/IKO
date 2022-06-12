import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {moderateScale} from '../Theme/Dimensions';

const AppInput = ({
  width = '100%',
  placeholder,
  editable = true,
  rightIcon = false,
}) => {
  return (
    <View style={styles.inputContainer(width)}>
      <TextInput
        style={styles.inputStyle(rightIcon)}
        placeholder={placeholder}
        editable={editable}
      />
      {rightIcon ? (
        <Fontisto
          name="date"
          color={'gray'}
          size={moderateScale(20)}
          style={{marginRight: Platform.select({android: 50, ios: 0})}}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: width => {
    return {
      width: width,
      marginTop: 5,
      padding: Platform.select({android: 0, ios: 10}),
      width: width,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 45,
    };
  },
  inputStyle: rightIcon => {
    return {
      paddingRight: 5,
      paddingLeft: Platform.select({android: 10, ios: 0}),
      fontSize: moderateScale(15),
      width: rightIcon ? '90%' : '100%',
      fontFamily: Theme.fontFamily.regular,
    };
  },
});

export default AppInput;
