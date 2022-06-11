import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const IKOPrivacyPolicy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader title={'Privacy Policy'} isMenu={false} />
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>
          Privacy policy of IKO mobile app{'\n'}
        </Text>
        <Text style={styles.bottomUpperPoint}>
          IKO may ask You for permission to:{'\n'}
        </Text>
        <Text style={styles.point}>
          - phone,{'\n\n'}- storage,{'\n\n'}- microphone,{'\n\n'}- location,
          {'\n\n'}- contacts,{'\n\n'}- camera.
        </Text>
        <Text style={styles.bottomUpperPoint}>
          {'\n\n\n'}
          You can control all app permissions in device settings.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: (width / 100) * 90,
          marginTop: 'auto',
          marginBottom: moderateScale(20),
        }}>
        <Text style={styles.link}>More at </Text>
        <Text style={[styles.link, styles.blueLink]} numberOfLines={1}>
          https://iko.pkobp.pl/iko_en/safety-rul
        </Text>
      </View>
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
  textWrapper: {
    paddingTop: moderateScale(30),
    paddingHorizontal: (width / 100) * 5,
  },
  heading: {
    color: 'black',
    fontFamily: Theme.fontFamily.bold,
    fontSize: moderateScale(16),
  },
  point: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(15),
  },
  link: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
  blueLink: {
    color: '#043573',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
  bottomUpperPoint: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(16),
  },
});

export default IKOPrivacyPolicy;
