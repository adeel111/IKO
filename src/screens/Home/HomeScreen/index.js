import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  FlatList,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import Loading from '../../../components/Loading';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import IndividualProfile from '../../../components/IndividualProfile';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showManual, setShowManual] = useState(false);
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Credit Cards',
      desc: 'Available credit limit',
      price: '5 000,00',
    },
    {
      id: 2,
      name: 'Desposits',
      desc: 'Available funds',
      price: '12 000,00',
    },
    {
      id: 3,
      name: 'Loans',
      desc: 'Repayment amount',
      price: '195 000,00',
    },
    {
      id: 4,
      name: 'Investment funds',
      desc: 'value',
      price: '94 579,97',
    },
    {
      id: 5,
      name: 'Pension schemes PPK and PPE',
      desc: 'value',
      price: '24 579,97',
    },
  ]);

  const [data, setData] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const [spinHomeIcon, setSpinHomeIcon] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBlikCode, setShowBlikCode] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showProfile) {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
    }
  }, [showProfile]);

  useEffect(() => {
    setTimeout(() => {
      setShowManual(true);
    }, 500);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  const getData = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://workingsoftwarecopy.xyz/api/info',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData(response?.data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error.response);
      });
  };

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

  const RenderItem = ({item, amount}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.bottomFlatlistCard}
        onPress={() => navigation.navigate('My Products', {tab: 1})}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.flatlistCardTag}>{item?.name}</Text>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={moderateScale(22)}
            color="#043573"
            onPress={() => {
              setMenuOpened(true);
            }}
          />
        </View>
        <Text style={styles.availableFunds}>{item?.desc}</Text>
        <Text style={styles.funds}>
          {amount || '0 PLN'}
          {/* <Text style={styles.currency}>PLN</Text> */}
        </Text>
        {/* <Menu
          onBackdropPress={() => setMenuOpened(false)}
          opened={menuOpened}
          style={{
            position: 'absolute',
            top: moderateScale(18),
            right: moderateScale(15),
          }}>
          <MenuTrigger text="" />
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                setMenuOpened(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontFamily: Theme.fontFamily.regular,
                  paddingVertical: moderateScale(10),
                  paddingLeft: moderateScale(10),
                }}>
                Customize dashboard
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu> */}
      </TouchableOpacity>
    );
  };

  const accountsRenderItem = ({item, index}) => {
    return index !== 4 ? (
      <View style={styles.swiperContainer}>
        <View style={styles.swiperTopRow}>
          <View>
            <Text style={styles.swiperBankName}>PKO Bank Polski</Text>
            <Text style={styles.swiperHolderName}>PKO KONTO BEZ GRANIC</Text>
          </View>
          <MaterialCommunityIcons
            onPress={() => setMenuOpened(true)}
            name="dots-vertical"
            size={moderateScale(22)}
            color="#043573"
          />
        </View>
        <Text style={styles.availableFunds}>Available funds</Text>
        <Text style={styles.funds}>
          {data?.balance}
          {/* <Text style={styles.currency}>PLN</Text> */}
        </Text>
        <View style={styles.swiperButtonWrapper}>
          <TouchableOpacity
            style={[
              styles.swiperButtonContainer,
              {
                borderRadius: moderateScale(5),
                backgroundColor: 'white',
                borderWidth: 0.5,
                borderColor: '#888888',
              },
            ]}
            onPress={() => navigation.navigate('History')}>
            <Fontisto name="history" color="#043570" size={moderateScale(16)} />
            <Text style={[styles.swiperButtonTag, {color: 'black'}]}>
              History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.swiperButtonContainer}
            onPress={() => navigation.navigate('Transfer')}>
            <FontAwesome name="money" color="white" size={moderateScale(18)} />
            <Text style={styles.swiperButtonTag}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.swiperContainer}>
        <Text style={styles.swiperboldText}>Add accounts from other banks</Text>
        <Text style={styles.swiperLightText}>
          View the balance and the history of your accounts from various banks
          in the IKO app and on the iPKO website.
        </Text>
        <TouchableOpacity style={styles.swiperAddaccountButtonContainer}>
          <AntDesign name="pluscircle" color="white" size={moderateScale(22)} />
          <Text style={styles.swiperButtonTag}>Add account</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <Loading visible={isLoading} />
      <AppHeader
        title=""
        leftIconClick={() => {
          if (showProfile) {
            rotateBack();
            setShowProfile(false);
            setSpinHomeIcon(false);
          } else {
            rotate();
            setShowProfile(true);
            setSpinHomeIcon(false);
          }
        }}
        spinTheIcon={spin}
        isSpinHomeIcon={spinHomeIcon}
      />
      {showProfile ? (
        <IndividualProfile />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: moderateScale(10),
          }}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.7} style={styles.btnContainer}>
            <Text style={styles.btnTxtStyle}>DEMO</Text>
          </TouchableOpacity>
          <View
            style={{
              width: (width / 100) * 90,
              paddingHorizontal: moderateScale(15),
              paddingVertical: moderateScale(20),
              backgroundColor: 'red',
              alignSelf: 'center',
              marginTop: moderateScale(20),
              paddingLeft: moderateScale(70),
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: Theme.fontFamily.bold,
                position: 'absolute',
                top: moderateScale(20),
                left: moderateScale(20),
                fontSize: moderateScale(40),
              }}>
              i
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: Theme.fontFamily.regular,
                  fontSize: moderateScale(18),
                }}>
                Demo mode
              </Text>
              <Entypo name="cross" color="white" size={moderateScale(22)} />
            </View>
            <Text
              style={{
                color: 'white',
                fontFamily: Theme.fontFamily.regular,
                fontSize: moderateScale(14),
                textAlign: 'left',
              }}>
              {'\n\n'}
              You are using demo mode of the IKO app. Active the app for free.
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.smallBtnContainer}>
              <Text style={styles.smallBtnTxtStyle}>More about IKO</Text>
            </TouchableOpacity>
          </View>
          <Carousel
            autoplay={false}
            sliderWidth={width}
            layout={'default'}
            onSnapToItem={index => {
              setActiveDot(index);
            }}
            contentContainerStyle={{
              marginTop: moderateScale(29),
            }}
            itemWidth={width}
            data={accounts}
            renderItem={accountsRenderItem}
          />
          <Pagination
            activeDotIndex={activeDot}
            activeOpacity={1}
            dotColor="#043570"
            dotStyle={{
              width: moderateScale(10),
              height: moderateScale(10),
              borderRadius: 100,
              marginHorizontal: moderateScale(-10),
            }}
            containerStyle={{
              opacity: 1,
            }}
            dotsLength={accounts.length}
            inactiveDotColor="white"
            inactiveDotStyle={{
              borderWidth: 3,
              borderColor: '#043570',
              width: moderateScale(20),
              height: moderateScale(20),
              borderRadius: 100,
              marginHorizontal: moderateScale(-20),
              backgroundColor: 'white',
              opacity: 1,
            }}
          />
          <View
            style={[
              styles.blikWrapper,
              {
                borderBottomLeftRadius: showBlikCode ? 0 : moderateScale(5),
                borderBottomRightRadius: showBlikCode ? 0 : moderateScale(5),
              },
            ]}>
            <View style={styles.blikLeftContainer}>
              <Image
                style={styles.blik}
                resizeMode="contain"
                source={require('../../../assets/images/Blik.jpg')}
              />
              <Text style={styles.blikTag}>BLIK code</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (showBlikCode === true) {
                  rotateBack();
                  setShowBlikCode(false);
                  setSpinHomeIcon(true);
                } else if (showBlikCode === false) {
                  rotate();
                  setShowBlikCode(true);
                  setSpinHomeIcon(true);
                }
              }}
              style={styles.blikRightContainer}>
              <Animated.View
                style={
                  spinHomeIcon
                    ? {
                        transform: [
                          {
                            rotate: spin,
                          },
                        ],
                      }
                    : {}
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
          </View>
          {showBlikCode && (
            <View style={[styles.blikExtended]}>
              <Text style={styles.blikCode}>123 456</Text>
              <View
                style={{
                  width: '80%',
                  height: moderateScale(7),
                  backgroundColor: 'lightgrey',
                  borderRadius: 100,
                  marginTop: moderateScale(10),
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '70%',
                    backgroundColor: '#043570',
                  }}
                />
              </View>
            </View>
          )}
          <RenderItem
            tab={1}
            item={accounts[0]}
            amount={data && data.accounts}
          />
          <RenderItem
            tab={2}
            item={accounts[1]}
            amount={data && data.deposites}
          />
          <RenderItem tab={3} item={accounts[2]} amount={data && data.loans} />
          <RenderItem
            tab={4}
            item={accounts[3]}
            amount={data && data.investment_funds}
          />
          <RenderItem
            tab={5}
            item={accounts[4]}
            amount={data && data.Pension_scheme_ppk}
          />
          {/* <FlatList
            data={[
              data?.credit_cards,
              data?.deposites,
              data?.loans,
              data?.investment_funds,
              data?.Pension_scheme_ppk,
            ]}
            extraData={data}
            renderItem={flatlistRenderItem}
          /> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  btnContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width / 100) * 90,
    height: moderateScale(50),
    backgroundColor: '#043570',
    elevation: moderateScale(2),
    marginTop: moderateScale(10),
  },
  btnTxtStyle: {
    color: 'white',
    fontSize: moderateScale(16),
    borderRadius: moderateScale(5),
    fontFamily: Theme.fontFamily.regular,
  },
  swiperContainer: {
    width: (width / 100) * 90,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: moderateScale(5),
    marginHorizontal: (width / 100) * 5,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(15),
    height: moderateScale(210),
    paddingTop: moderateScale(20),
    marginTop: moderateScale(20),
  },
  swiperTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: moderateScale(15),
  },
  availableFunds: {
    marginTop: moderateScale(20),
    textAlign: 'right',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
    color: '#888888',
  },
  funds: {
    color: 'black',
    textAlign: 'right',
    fontFamily: Theme.fontFamily.medium,
    fontSize: moderateScale(18),
  },
  currency: {
    fontSize: moderateScale(14),
  },
  smallBtnContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    width: moderateScale(150),
    height: moderateScale(40),
    alignSelf: 'flex-end',
    marginTop: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBtnTxtStyle: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
  },
  swiperButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
  swiperButtonContainer: {
    height: moderateScale(50),
    width: '49%',
    backgroundColor: '#043570',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
  },
  swiperButtonTag: {
    color: 'white',
    marginLeft: moderateScale(10),
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(15),
  },
  swiperboldText: {
    color: 'black',
    fontFamily: Theme.fontFamily.semi,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  swiperLightText: {
    fontSize: moderateScale(15),
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  swiperAddaccountButtonContainer: {
    flexDirection: 'row',
    width: '95%',
    height: moderateScale(55),
    borderRadius: moderateScale(8),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#043570',
    marginTop: 'auto',
  },
  blikWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (width / 100) * 90,
    height: moderateScale(55),
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: moderateScale(10),
    borderRadius: moderateScale(5),
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  blikLeftContainer: {
    width: (width / 100) * 90 - moderateScale(55),
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blik: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  blikTag: {
    fontFamily: Theme.fontFamily.regular,
    color: 'black',
    fontSize: moderateScale(16),
  },
  blikRightContainer: {
    width: moderateScale(55),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0.5,
    borderColor: 'grey',
  },
  blikExtended: {
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: 'column',
    height: moderateScale(150),
    width: (width / 100) * 90,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomRightRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  blikCode: {
    textAlign: 'center',
    fontSize: moderateScale(50),

    color: 'black',
    fontFamily: Theme.fontFamily.medium,
    marginTop: moderateScale(10),
  },
  bottomFlatlistCard: {
    width: (width / 100) * 90,
    borderRadius: moderateScale(5),
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
    backgroundColor: 'white',
    elevation: moderateScale(10),
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  flatlistCardTag: {
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(16),
    color: 'black',
  },
});

export default HomeScreen;
