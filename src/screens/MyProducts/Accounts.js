import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../Theme/Dimensions';

const {width, height} = Dimensions.get('window');

const Accounts = () => {
  const data = [
    {title: 'PLN', data: [1, 2, 3, 4, 5]},
    {title: 'GBP', data: [1]},
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
        <Text style={styles.swiperBankName}>PKO Bank Polski</Text>
        <Text style={styles.swiperHolderName}>PKO KONTO BEZ GRANIC</Text>
        <Text
          style={[styles.swiperHolderName, {color: '#888888', marginTop: 0}]}>
          3456544567654
        </Text>
        <Text style={styles.availableFunds}>Available funds</Text>
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
  swiperBankName: {
    color: 'black',
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(5),
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(10),
  },
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

export default Accounts;
