import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import TopTab from './TopTab';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const ExchangeRateScreen = ({navigation}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.backBlurr} />
        <View style={styles.modalWrapper}>
          <Text
            style={{
              color: 'black',
              fontSize: moderateScale(16),
              fontFamily: Theme.fontFamily.semi,
            }}>
            Do you agree to leave the{'\n'}application?
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: Theme.fontFamily.regular,
              fontSize: moderateScale(15),
            }}>
            {'\n'}
            You will be redirected to a page with a margin calculator for card
            transactions in foreign currencies.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: moderateScale(20),
            }}>
            <Text
              onPress={() => setIsVisible(false)}
              style={{
                color: 'black',
                fontFamily: Theme.fontFamily.regular,
                fontSize: moderateScale(15),
                marginLeft: moderateScale(10),
                paddingHorizontal: moderateScale(10),
                paddingVertical: moderateScale(5),
              }}>
              NO
            </Text>
            <Text
              onPress={() => setIsVisible(false)}
              style={{
                color: '#043573',
                fontFamily: Theme.fontFamily.regular,
                fontSize: moderateScale(15),
                marginLeft: moderateScale(20),
                paddingHorizontal: moderateScale(10),
                paddingVertical: moderateScale(5),
              }}>
              YES
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader
        title={'Exchange rates'}
        onPress={() => setMenuOpened(true)}
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
              setIsVisible(true);
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: moderateScale(18),
                fontFamily: Theme.fontFamily.regular,
                paddingVertical: moderateScale(10),
                paddingLeft: moderateScale(10),
              }}>
              Margin - cards
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
      <TopTab />
      {isVisible && showModal()}
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
    justifyContent: 'space-between',
    height: moderateScale(55),
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    width: width,
    paddingHorizontal: (width / 100) * 5,
    backgroundColor: 'white',
    elevation: moderateScale(2),
  },
  headerTag: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: Theme.fontFamily.regular,
    // marginLeft: moderateScale(5),
  },
  demo: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(5),
    marginLeft: moderateScale(2),
    color: '#E3545D',
    fontFamily: Theme.fontFamily.regular,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    width: width,
    height: height,
  },
  backBlurr: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalWrapper: {
    width: (width / 100) * 90,
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    elevation: moderateScale(5),
    paddingVertical: moderateScale(25),
    paddingHorizontal: (width / 100) * 5,
  },
});

export default ExchangeRateScreen;
