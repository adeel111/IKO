import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from '../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import Theme from '../Theme/Theme';

const {width} = Dimensions.get('window');

const AppBackHeader = ({title, isMenu = true, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.innerView}>
        <Entypo
          name="cross"
          color={'#043573'}
          size={moderateScale(30)}
          onPress={() => navigation.goBack()}
        />
        <View style={{marginLeft: moderateScale(20)}}>
          <Text style={styles.headerTag}>{title}</Text>
          <Text style={styles.demo}>DEMO</Text>
        </View>
      </View>
      {isMenu ? (
        <MaterialCommunityIcons
          onPress={() => onPress()}
          name="dots-vertical"
          size={moderateScale(30)}
          color="#043573"
          style={{
            paddingHorizontal: moderateScale(3),
          }}
        />
      ) : null}
    </View>
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
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTag: {
    color: 'black',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.regular,
  },
  demo: {
    fontSize: moderateScale(13),
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(2),
    color: '#E3545D',
    fontFamily: Theme.fontFamily.regular,
  },
});

export default AppBackHeader;
