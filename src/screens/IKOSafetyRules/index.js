import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const IKOSafetyRules = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader title={'IKO safety rules'} isMenu={false} />
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>
          Apply the rules of safe movile devices use:{'\n\n'}
        </Text>
        <Text style={styles.point}>1 . Activate phone access lock.</Text>
        <Text style={styles.point}>2 . Install anti-virus software.</Text>
        <Text style={styles.point}>
          3 . Be a conscious Internet user on your mobile device.
        </Text>
        <Text style={styles.point}>4 . Update operating system.</Text>
        <Text style={styles.point}>
          5 . Do not use easy-to-press PIN codes.
        </Text>
        <Text style={styles.point}>
          6 . Avoid giving the device to another user.
        </Text>
        <Text style={styles.point}>
          7 . When using the app, avoid public Wi-Fi networks and other
          untrusted internet connections. Pay attention to the attempts to get
          hold of login data to the iPKO Internet service. These data are needed
          only for activation of IKO.
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
});

export default IKOSafetyRules;
