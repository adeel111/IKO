import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const data = [
  {
    tag: 'IKO manual',
    no: 1,
  },
  {
    tag: 'Rate IKO',
    no: 2,
  },
  {
    tag: 'IKO safety rules',
    no: 3,
  },
  {
    tag: 'Privacy Policy',
    no: 4,
  },
  {
    tag: 'Terms and Conditions',
    no: 5,
  },
  {
    tag: 'Recommended IKO',
    no: 6,
  },
  {
    tag: 'License',
    no: 7,
  },
];

const AboutIKO = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleSettingNavigation(item.no)}
        activeOpacity={1}
        style={styles.item}>
        <Text style={styles.itemTag}>{item.tag}</Text>
      </TouchableOpacity>
    );
  };

  const handleSettingNavigation = no => {
    if (no === 1) {
      navigation.navigate('IKOManual');
    } else if (no === 3) {
      navigation.navigate('IKOSafetyRules');
    } else if (no === 2) {
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=pl.pkobp.iko',
      );
    } else if (no === 4) {
      navigation.navigate('IKOPrivacyPolicy');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader title={'About IKO'} isMenu={false} />
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
          }}
          resizeMode="contain"
        />
        <Text style={styles.appName}>IKO</Text>
      </View>
      <Text style={styles.version}>Version 3.135.28</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
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
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
  },
  appName: {
    color: 'black',
    fontFamily: Theme.fontFamily.bold,
    fontSize: moderateScale(20),
  },
  version: {
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
    color: '#404040',
    fontSize: moderateScale(13),
    marginBottom: moderateScale(20),
  },
  item: {
    width: '100%',
    height: moderateScale(55),
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: (width / 100) * 5,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  },
  itemTag: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(16),
  },
});

export default AboutIKO;
