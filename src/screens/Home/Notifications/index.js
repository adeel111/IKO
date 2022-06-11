import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, ScrollView, View, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import All from './All';
// import Authorization from './Authorization';
// import Messages from './Messages';
// import Offers from './Offers';
// import Events from './Events';
import AppStatusBar from '../../../components/AppStatusBar';
import AppBackHeader from '../../../components/AppBackHeader';

const Notifications = ({navigation}) => {
  const [selected, setSelected] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const swipe = useRef();
  const AF = useRef();

  useEffect(() => {
    scroll();
  }, [selected]);

  const scroll = () => {
    if (selected === 0)
      AF.current.scrollTo({
        x: 0,
        animated: true,
      });
    else if (selected === 1)
      AF.current.scrollTo({
        animated: true,
        x: 108,
      });
    else if (selected === 2)
      AF.current.scrollTo({
        animated: true,
        x: 189,
      });
    else if (selected === 3)
      AF.current.scrollTo({
        animated: true,
        x: 277,
      });
    else if (selected === 4)
      AF.current.scrollTo({
        animated: true,
        x: 448,
      });
    else if (selected === 5) AF.current.scrollToEnd({animated: true});
  };

  const data = ['All', 'Authorization', 'Messages', 'Offers', 'Events'];

  const PaginationComponent = () => {
    return (
      <View
        style={{
          top: 0,
          backgroundColor: 'white',
          position: 'absolute',
          borderBottomWidth: 0.5,
          borderColor: 'grey',
        }}>
        <ScrollView
          ref={AF}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'white',
            height: moderateScale(50),
          }}>
          {data.map((k, index) => {
            return (
              <View
                style={
                  selected === index
                    ? styles.tabContainer(true)
                    : styles.tabContainer(false)
                }>
                <Text
                  onPress={() => {
                    swipe.current.scrollToIndex({index: index, animated: true});
                    setSelected(index);
                  }}
                  style={styles.tabText}>
                  {k}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader
        title={'Notifications'}
        onPress={() => setMenuOpened(true)}
      />
      <View style={styles.menuContainer}>
        <Menu
          onBackdropPress={() => setMenuOpened(false)}
          opened={menuOpened}
          contentContainerStyle={{position: 'absolute'}}>
          <MenuTrigger text="" />
          <MenuOptions optionsContainerStyle={styles.menuStyle}>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>
                Quick access with a PIN code
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>Mark all as read</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>
                Mark selected / delete
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>
                Push notifications settings
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>Delete all</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>

      <View style={styles.mainContainer}>
        <PaginationComponent />
        <SwiperFlatList
          PaginationComponent={PaginationComponent}
          ref={swipe}
          autoplayLoop={false}
          autoplay={false}
          onChangeIndex={data => {
            setSelected(data.index);
          }}
          showPagination={true}>
          <All />
          {/* <Cards />
          <Saving />
          <LoansCredits />
          <Investing />
          <Insurance /> */}
        </SwiperFlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  menuItemTxtStyle: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
    paddingVertical: moderateScale(7),
    paddingLeft: moderateScale(10),
  },
  tabContainer: isSelected => {
    return {
      height: '100%',
      paddingHorizontal: moderateScale(20),
      fontFamily: Theme.fontFamily.regular,
      color: 'black',
      fontSize: moderateScale(16),
      textAlignVertical: 'center',
      borderBottomWidth: 2,
      borderColor: isSelected ? '#043570' : 'white',
      justifyContent: 'center',
    };
  },
  selectedTabText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  tabText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  menuContainer: {
    marginTop: -10,
    alignItems: 'flex-end',
    right: moderateScale(45),
  },
  menuStyle: {
    width: '70%',
    alignSelf: 'flex-end',
  },
});

export default Notifications;
