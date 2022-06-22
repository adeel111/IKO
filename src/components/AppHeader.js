import React from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {moderateScale} from '../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import Theme from '../Theme/Theme';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');

const AppHeader = ({
  title,
  menuIcon = false,
  leftIconClick = () => {},
  spinTheIcon,
  isSpinHomeIcon,
  onPress,
}) => {
  const navigation = useNavigation();
  const {userName} = useSelector(state => state.home);

  let showName = userName.split(' ');

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => leftIconClick()}
        style={styles.headerLeftContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.userName}>
            {userName === 'JI'
              ? userName
              : `${showName[0]?.[0]}${showName[showName.length - 1]?.[0]}`}
          </Text>
        </View>
        <Animated.View
          style={
            !isSpinHomeIcon
              ? {
                  transform: [
                    {
                      rotate: spinTheIcon,
                    },
                  ],
                }
              : null
          }>
          <AntDesign
            name="down"
            color={'#043570'}
            size={moderateScale(16)}
            style={{
              marginLeft: moderateScale(5),
            }}
          />
        </Animated.View>
      </TouchableOpacity>
      {title === '' ? (
        <Text />
      ) : (
        <Text style={styles.titleTxtStyle}>
          {title} {'\n'} <Text style={{color: 'red'}}>Demo</Text>
        </Text>
      )}
      {menuIcon ? (
        <Entypo
          name="dots-three-vertical"
          color={'#043570'}
          size={moderateScale(18)}
          onPress={() => onPress()}
        />
      ) : (
        <Fontisto
          name="bell"
          color={'#043570'}
          size={moderateScale(18)}
          onPress={() => navigation.navigate('Notifications')}
        />
      )}
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
  txtContainer: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(35),
    height: moderateScale(35),
    backgroundColor: '#F2F2F2',
  },
  userName: {
    color: 'black',
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  titleTxtStyle: {
    color: 'black',
    borderRadius: 100,
    textAlign: 'center',
    marginLeft: -20,
    textAlignVertical: 'center',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
});

export default AppHeader;
