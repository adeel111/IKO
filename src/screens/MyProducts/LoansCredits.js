import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../Theme/Dimensions';

const {width, height} = Dimensions.get('window');

const LoansCredits = () => {
  const data = [1, 2];

  const bottomtabHeight = useBottomTabBarHeight();

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          paddingVertical: moderateScale(20),
          borderTopWidth: 0.5,
          borderColor: 'grey',
          paddingHorizontal: (width / 100) * 5,
          backgroundColor: 'white',
        }}>
        <Text style={styles.swiperHolderName}>PKO KONTO BEZ GRANIC</Text>
        <Text
          style={[styles.swiperHolderName, {color: '#888888', marginTop: 0}]}>
          3456544567654
        </Text>
        <Text style={styles.availableFunds}>Credit Amount</Text>
        <Text style={styles.funds}>
          5700,00 <Text style={styles.currency}>PLN</Text>
        </Text>
      </View>
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(100),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  swiperHolderName: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(18),
    marginTop: moderateScale(15),
  },
  availableFunds: {
    marginTop: moderateScale(25),
    textAlign: 'right',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
    color: '#888888',
  },
  funds: {
    color: 'black',
    textAlign: 'right',
    fontFamily: Theme.fontFamily.medium,
    fontSize: moderateScale(24),
  },
  currency: {
    fontSize: moderateScale(14),
  },
});

export default LoansCredits;
