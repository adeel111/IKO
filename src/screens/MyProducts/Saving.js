import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Saving = () => {
  const bottomtabHeight = useBottomTabBarHeight();

  const data = [
    {
      title: 'Deposits',
      description: 'Do you have any available funds? Save safely on a deposit',
      source: require('../../assets/images/deposit.png'),
    },
    {
      title: 'Auto-saving',
      description: 'Automatically put money aside on your account',
      source: require('../../assets/images/cost-saving.png'),
    },
    {
      title: 'Moneyboxes',
      description:
        'Put the money aside for your dream journey, a bicycle, language course, etc.',
      source: require('../../assets/images/piggy-bank.png'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={1} style={styles.itemContainer}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={item.source}
            resizeMode="contain"
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
            }}
          />
          <Text style={styles.title}>
            {item.title}
            <Text style={styles.description}>
              {'\n\n'}
              {item.description}
            </Text>
          </Text>
        </View>
        <FontAwesome
          name="angle-right"
          color="#043570"
          size={moderateScale(22)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: height - moderateScale(105) - bottomtabHeight,
        width: width,
        top: moderateScale(50),
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: moderateScale(100),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (width / 100) * 5,
    paddingVertical: moderateScale(10),
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  title: {
    marginLeft: moderateScale(15),
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    width: '75%',
  },
  description: {
    fontSize: moderateScale(14),
    color: 'grey',
    fontFamily: Theme.fontFamily.medium,
  },
});

export default Saving;
