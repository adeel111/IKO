import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {moderateScale} from '../../../Theme/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const {width, height} = Dimensions.get('window');

const Authorization = () => {
  const data = [
    {title: 'October 2019', data: [1]},
    {title: 'January 2018', data: [1, 2]},
    {title: 'February 2018', data: [1]},
  ];
  const [menuOpened, setMenuOpened] = useState(false);

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
      <View style={styles.childItemContainer}>
        <View style={styles.lineView} />
        <View style={styles.childView}>
          <View style={{flex: 1}}>
            <View style={styles.rowContainer}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="lightning-bolt-outline"
                    color={'white'}
                    size={moderateScale(22)}
                  />
                </View>
                <View>
                  <Text style={styles.nameTxtStyle}>Scan and transfer</Text>
                  <Text style={styles.dateTimeTxtStyle}>
                    29.10.2019 | 10:50
                  </Text>
                </View>
              </View>
              <Entypo
                name="dots-three-vertical"
                color={'#043570'}
                size={moderateScale(18)}
                onPress={() => setMenuOpened(true)}
              />
            </View>
            <Text style={styles.txtStyle}>Data imported successfully</Text>
          </View>
        </View>
        {/* <Menu
          onBackdropPress={() => setMenuOpened(false)}
          opened={menuOpened}
          contentContainerStyle={{
            marginTop: 15,
            right: 15,
            position: 'absolute',
          }}>
          <MenuTrigger text="" />
          <MenuOptions>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>Mark all as read</Text>
            </MenuOption>
          </MenuOptions>
        </Menu> */}
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
  nameTxtStyle: {
    color: 'black',
    paddingLeft: 10,
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.regular,
  },
  dateTimeTxtStyle: {
    color: 'gray',
    paddingLeft: 10,
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.regular,
  },
  availableFunds: {
    marginTop: moderateScale(25),
    textAlign: 'right',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
    color: '#888888',
  },
  txtStyle: {
    color: 'black',
    marginTop: 15,
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.regular,
  },
  currency: {
    fontSize: moderateScale(14),
  },
  lineView: {
    width: 5,
    height: '100%',
    backgroundColor: '#043570',
  },
  childView: {
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    flexDirection: 'row',
    paddingVertical: moderateScale(20),
    paddingHorizontal: (width / 100) * 5,
  },
  childItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#043570',
  },
  menuContainer: {
    marginTop: -10,
    alignItems: 'flex-end',
    right: moderateScale(45),
  },
  menuItemTxtStyle: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
    paddingVertical: moderateScale(5),
    paddingLeft: moderateScale(10),
  },
});

export default Authorization;
