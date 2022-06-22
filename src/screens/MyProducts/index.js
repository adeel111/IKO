import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Accounts from './Accounts';
import Cards from './Cards';
import Saving from './Saving';
import LoansCredits from './LoansCredits';
import Investing from './Investing';
import Insurance from './Insurance';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import IndividualProfile from '../../components/IndividualProfile';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const {width, height} = Dimensions.get('window');

const MyProducts = ({navigation, route}) => {
  const swipe = useRef();
  const AF = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selected, setSelected] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (showProfile) {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
    }
  }, [showProfile]);

  useEffect(() => {
    const showTab = route?.params?.tab === undefined ? 0 : 1;
    setSelected(parseInt(showTab));
  }, [navigation, route]);

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

  const data = [
    'Accounts',
    'Cards',
    'Saving',
    'Loans and credits',
    'Investing',
    'Insurance',
  ];

  const rotate = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateBack = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

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
      <AppHeader
        title="My products"
        menuIcon={true}
        leftIconClick={() => {
          if (showProfile) {
            rotateBack();
            setShowProfile(false);
          } else {
            rotate();
            setShowProfile(true);
          }
        }}
        spinTheIcon={spin}
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
                Push notifications settings
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>
                Open a savings account
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>Open currency account</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.menuItemTxtStyle}>
                Add account from another bank
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      {showProfile ? (
        <IndividualProfile />
      ) : (
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
            <Accounts />
            <Cards />
            <Saving />
            <LoansCredits />
            <Investing />
            <Insurance />
          </SwiperFlatList>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
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
  menuItemTxtStyle: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
    paddingVertical: moderateScale(7),
    paddingLeft: moderateScale(10),
  },
});

export default MyProducts;
