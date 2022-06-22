import React, {useRef, useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AppStatusBar from '../../components/AppStatusBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feater from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSelector} from 'react-redux';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const {width, height} = Dimensions.get('window');
const navBarHeight =
  Dimensions.get('screen').height - StatusBar.currentHeight - height < 0
    ? -(Dimensions.get('screen').height - StatusBar.currentHeight - height)
    : Dimensions.get('screen').height - StatusBar.currentHeight - height;

const DemoScreen = ({navigation}) => {
  const down = useRef();
  const bottomSheet = useRef();
  const loginINBottomSheet = useRef();
  const [pin, setPin] = useState('');
  const {quickAcess} = useSelector(state => state.auth);
  const [menuOpened, setMenuOpened] = useState(false);
  const [opened, setOpened] = useState('');

  useEffect(() => {
    setTimeout(() => {
      down.current.scrollToEnd({animated: true});
    }, 700);
  }, []);

  useEffect(() => {
    handleClosePin();
  }, [pin]);

  const handleClosePin = () => {
    if (pin.length === 4) {
      if (opened === '') bottomSheet.current.close();
      else if (opened === 'login') {
        setPin('');
        loginINBottomSheet.current.close();
        setTimeout(() => {
          navigation.navigate('BottomTab');
        }, 400);
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatListItem}>
        <TouchableOpacity
          style={styles.flatListCircle}
          activeOpacity={0.5}
          onPress={() => handleRenderItem(item.no)}>
          {item.no !== 13 ? (
            <Image source={item.path} style={styles.flatListImage} />
          ) : (
            <Text
              style={{
                color: '#043573',
                textAlign: 'center',
                fontSize: moderateScale(14),
                fontFamily: Theme.fontFamily.regular,
              }}>
              <Text
                style={{
                  fontFamily: Theme.fontFamily.bold,
                }}>
                i
              </Text>
              PKO{'\n'}
              <Text
                style={{
                  fontSize: moderateScale(11),
                  lineHeight: moderateScale(11),
                }}>
                dealer
              </Text>
            </Text>
          )}
        </TouchableOpacity>
        <Text style={styles.flatListTag}>{item.tag}</Text>
      </View>
    );
  };

  const keys = [
    {
      no: '1',
      text: '',
    },
    {
      no: '2',
      text: 'ABC',
    },
    {
      no: '3',
      text: 'DEF',
    },
    {
      no: '4',
      text: 'GHI',
    },
    {
      no: '5',
      text: 'JKL',
    },
    {
      no: '6',
      text: 'MNO',
    },
    {
      no: '7',
      text: 'PQRS',
    },
    {
      no: '8',
      text: 'TUV',
    },
    {
      no: '9',
      text: 'WXYZ',
    },
    {
      no: '',
      text: '',
    },
    {
      no: '0',
      text: '',
    },
  ];

  const keyboardRenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (item.no !== '') {
            if (pin.length < 4) setPin(pin + item.no);
          } else {
            setPin(`${pin.slice(0, -1)}`);
          }
        }}
        style={styles.keyboardKey}>
        {item.no === '' ? (
          <Feater name="delete" color={'black'} size={moderateScale(30)} />
        ) : (
          <>
            <Text style={styles.keyboardLetter}>{item.no}</Text>
            <Text style={styles.keyboardSecondLetter}>
              {'  '}
              {item.text}
            </Text>
          </>
        )}
      </TouchableOpacity>
    );
  };

  const handleRenderItem = no => {
    if (no === 1) {
      setOpened('');
      bottomSheet.current.open();
    } else if (no === 2) {
      loginINBottomSheet.current.open();
    } else if (no === 4) {
      navigation.navigate('ExchangeRateScreen');
    } else if (no === 6) {
      navigation.navigate('AboutIKO');
    } else if (no === 5) {
      navigation.navigate('Contact');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={{
            width: moderateScale(30),
            height: moderateScale(30),
          }}
          resizeMode="contain"
        />

        <Text style={styles.headerTag}>IKO</Text>
        <Text style={styles.demo}>DEMO</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={down}
        contentContainerStyle={{
          paddingBottom: height - (height / 100) * 18 - moderateScale(520),
        }}>
        <View style={styles.PreviewWrapper}>
          <Text style={styles.previewHeading}>Account balance preview</Text>
          <Text style={styles.previewDescription}>
            {'\n'}If you wish to see here your account balance,enable this
            feature in app settings.
          </Text>
          <Text style={styles.previewButton}>Go to settings</Text>
        </View>
        <View
          style={{
            paddingVertical: moderateScale(30),
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../../assets/images/auth.png')}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomRowButton}>
            <Text style={styles.quickAccess}>Quick Access</Text>
            <MaterialCommunityIcons
              onPress={() => setMenuOpened(true)}
              name="dots-vertical"
              size={moderateScale(22)}
              color="#043573"
            />
            <Menu
              onBackdropPress={() => setMenuOpened(false)}
              opened={menuOpened}
              style={{
                position: 'absolute',
                top: moderateScale(5),
                right: moderateScale(5),
              }}>
              <MenuTrigger text="" />
              <MenuOptions>
                <MenuOption
                  onSelect={() => {
                    setMenuOpened(false);
                    navigation.navigate('CustomizeQuickAccess');
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
            </Menu>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={quickAcess.filter(f => f.show === true)}
            renderItem={renderItem}
            ListFooterComponent={() => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('CustomizeQuickAccess')}
                  style={[styles.flatListItem, {}]}>
                  <ImageBackground
                    source={require('../../assets/images/circle.png')}
                    resizeMode="contain"
                    style={[
                      styles.flatListCircle,
                      {
                        borderWidth: 0,
                      },
                    ]}>
                    <Image
                      source={require('../../assets/images/add.png')}
                      style={{
                        width: '50%',
                        height: '50%',
                        resizeMode: 'contain',
                      }}
                    />
                  </ImageBackground>
                  <Text style={styles.flatListTag}>Add</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setOpened('login');
            loginINBottomSheet.current.open();
          }}
          style={styles.bottomVerticalButton}>
          <MaterialIcons name="lock" color={'white'} size={moderateScale(22)} />
          <Text
            style={[
              styles.bottomButtonTag,
              {
                marginLeft: moderateScale(10),
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={[
            styles.bottomVerticalButton,
            {
              backgroundColor: '#E4202C',
              marginVertical: moderateScale(10),
            },
          ]}>
          <Text
            style={[
              styles.bottomButtonTag,
              {
                fontSize: moderateScale(18),
              },
            ]}>
            Quit DEMO
          </Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={bottomSheet}
        openDuration={260}
        height={moderateScale(500)}
        closeOnPressMask={false}
        customStyles={{
          container: {
            paddingBottom: 15,
            backgroundColor: '#F2F2F2',
            borderTopLeftRadius: moderateScale(15),
            borderTopRightRadius: moderateScale(15),
          },
        }}>
        <Entypo
          name="cross"
          color={'black'}
          size={moderateScale(30)}
          onPress={() => bottomSheet.current.close()}
          style={{
            alignSelf: 'flex-end',
            marginRight: (width / 100) * 5,
            marginTop: (width / 100) * 5,
          }}
        />
        <Text style={styles.enterPinTopText}>
          Enter your PIN to view notifications
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(20),
          }}>
          {[9, 9, 9, 9].map((k, index) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setPin('')}
                style={{
                  width: moderateScale(50),
                  height: moderateScale(60),
                  backgroundColor: 'white',
                  borderWidth: 0.5,
                  borderRadius: moderateScale(7),
                  elevation: moderateScale(1),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: moderateScale(5),
                }}>
                <View
                  style={{
                    width: moderateScale(20),
                    height: moderateScale(20),
                    backgroundColor: index < pin.length ? 'black' : 'white',
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.keyboardContainer}>
          <FlatList
            data={keys}
            renderItem={keyboardRenderItem}
            numColumns={3}
            style={{
              alignSelf: 'center',
            }}
          />
        </View>
      </RBSheet>
      <RBSheet
        animationType="fade"
        ref={loginINBottomSheet}
        openDuration={0}
        closeDuration={0}
        height={height}
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: 'white',
          },
        }}>
        <View
          style={[
            styles.header,
            Platform.select({android: {}, ios: {height: 100}}),
          ]}>
          <View
            style={{
              paddingTop: Platform.select({android: 0, ios: 40}),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo
              name="cross"
              color={'#043573'}
              size={moderateScale(30)}
              onPress={() => loginINBottomSheet.current.close()}
            />

            <View
              style={{
                marginLeft: moderateScale(20),
              }}>
              <Text style={styles.headerTag}>Login</Text>
              <Text style={styles.demo}>DEMO</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 20,
            backgroundColor: '#F2F2F2',
          }}>
          <Text
            style={[
              styles.enterPinTopText,
              {
                width: (width / 100) * 80,
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: moderateScale(20),
              },
            ]}>
            Enter your PIN code to login into demo mode
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(20),
            }}>
            {[9, 9, 9, 9].map((k, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setPin('')}
                  style={{
                    width: moderateScale(50),
                    height: moderateScale(60),
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderRadius: moderateScale(7),
                    elevation: moderateScale(1),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: moderateScale(5),
                  }}>
                  <View
                    style={{
                      width: moderateScale(20),
                      height: moderateScale(20),
                      backgroundColor: index < pin.length ? 'black' : 'white',
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.keyboardContainer}>
            <FlatList
              data={keys}
              renderItem={keyboardRenderItem}
              numColumns={3}
              style={{
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: moderateScale(55),
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    width: width,
    paddingLeft: (width / 100) * 5,
    backgroundColor: 'white',
    elevation: moderateScale(2),
  },
  headerTag: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: Theme.fontFamily.bold,
    // marginLeft: moderateScale(5),
  },
  demo: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(2),
    color: '#E3545D',
    fontFamily: Theme.fontFamily.regular,
  },
  PreviewWrapper: {
    width: width,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: (width / 100) * 5,
    paddingVertical: moderateScale(25),
    height: moderateScale(200),
  },
  previewHeading: {
    color: 'black',
    fontSize: moderateScale(17),
    fontFamily: Theme.fontFamily.medium,
  },
  previewDescription: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
  },
  previewButton: {
    height: moderateScale(30),
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: moderateScale(30),
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
    color: '#043573',
  },
  mainImage: {
    // width: width / 3,
    height: (height / 100) * 15,
    resizeMode: 'contain',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  bottomContainer: {
    backgroundColor: 'white',
    marginTop: moderateScale(30),
    paddingBottom: moderateScale(30),
  },
  bottomRowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (width / 100) * 5,
    paddingTop: moderateScale(15),
  },
  quickAccess: {
    color: '#272727',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
  },
  flatListItem: {
    width: moderateScale(110),
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
    marginTop: moderateScale(20),
  },
  flatListCircle: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListTag: {
    color: 'black',
    fontSize: moderateScale(13),
    fontFamily: Theme.fontFamily.regular,
    marginTop: moderateScale(5),
    textAlign: 'center',
  },
  flatListImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  bottomButtonContainer: {
    paddingTop: moderateScale(10),
    backgroundColor: 'white',
    width: width,
    marginTop: 'auto',
    height: moderateScale(185),
  },
  bottomVerticalButton: {
    width: (width / 100) * 95,
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    backgroundColor: '#043573',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomButtonTag: {
    color: 'white',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.medium,
  },
  enterPinTopText: {
    color: '#272727',
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.regular,
  },
  keyboardKey: {
    width: moderateScale(100),
    height: moderateScale(50),
    // backgroundColor: 'red',
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
  },
  keyboardLetter: {
    color: 'black',
    fontSize: moderateScale(30),
    fontFamily: Theme.fontFamily.bold,
  },
  keyboardSecondLetter: {
    color: '#272727',
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.regular,
  },
  keyboardContainer: {
    marginTop: 'auto',
    paddingBottom: navBarHeight,
  },
});

export default DemoScreen;
