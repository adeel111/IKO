import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-scalable-image';

const {width, height} = Dimensions.get('window');

const Cards = () => {
  const data = [
    {title: 'Credit cards', data: [1]},
    {title: 'Debit cards', data: [1]},
  ];

  const bottomtabHeight = useBottomTabBarHeight();

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>{item.title}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <FlatList
            data={item.data}
            renderItem={ChildRenderItem}
            contentContainerStyle={{
              backgroundColor: 'white',
            }}
          />
        </View>
      </View>
    );
  };

  const ChildRenderItem = ({item, index}) => {
    return (
      <View
        style={{
          paddingVertical: moderateScale(20),
          borderTopWidth: 0.5,
          borderColor: 'grey',
          paddingHorizontal: (width / 100) * 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.swiperHolderName}>PKO KONTO BEZ GRANIC</Text>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={moderateScale(22)}
            color="#043573"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            // justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/images/creditcard.png')}
            width={(width / 100) * 42 - moderateScale(20)}
          />
          <View
            style={{
              //   width: '50%',
              paddingLeft: moderateScale(20),
            }}>
            <Text style={styles.availableFunds}>Available funds</Text>
            <Text style={styles.funds}>
              5700,00 <Text style={styles.currency}>PLN</Text>
            </Text>
            <Text
              style={[
                styles.availableFunds,
                {
                  marginTop: moderateScale(10),
                },
              ]}>
              Status
            </Text>
            <Text
              style={[
                styles.funds,
                styles.currency,
                {
                  fontFamily: Theme.fontFamily.regular,
                  fontSize: moderateScale(18),
                },
              ]}>
              Aktywna
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    headerTextView: {
      height: moderateScale(45),
      justifyContent: 'center',
    },
    secitonListHeader: {
      paddingLeft: (width / 100) * 5,
      color: 'black',
      fontFamily: Theme.fontFamily.regular,
      fontSize: moderateScale(14),
    },
    swiperHolderName: {
      color: 'black',
      fontFamily: Theme.fontFamily.regular,
      fontSize: moderateScale(16),
    },
    availableFunds: {
      marginTop: moderateScale(25),
      textAlign: 'left',
      fontFamily: Theme.fontFamily.regular,
      fontSize: moderateScale(12),
      color: '#888888',
    },
    funds: {
      color: 'black',
      textAlign: 'left',
      fontFamily: Theme.fontFamily.medium,
      fontSize: moderateScale(24),
    },
    currency: {
      fontSize: moderateScale(14),
    },
  });

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

export default Cards;
