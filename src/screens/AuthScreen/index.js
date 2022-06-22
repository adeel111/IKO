import React, {useRef} from 'react';

import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Theme from '../../Theme/Theme';

import {moderateScale, verticalScale} from '../../Theme/Dimensions';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

const {width, height} = Dimensions.get('window');

const AuthScreen = ({navigation}) => {
  const withoutAccount = useRef();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        barStyle={Platform.select({
          android: 'light-content',
          ios: 'dark-content',
        })}
        backgroundColor={'#043573'}
      />
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
          }}
          resizeMode="contain"
        />

        <Text style={styles.headerTag}>IKO</Text>
      </View>
      <Image
        source={require('../../assets/images/auth.png')}
        style={styles.mainImage}
      />
      <Text
        style={{
          color: 'black',
          fontSize: verticalScale(16),
          // fontSize: width / 22,
          textAlign: 'center',
          fontFamily: Theme.fontFamily.Montserrat_MediumItalic,
        }}>
        dzien dobry
      </Text>
      <View
        style={{
          marginTop: 'auto',
        }}>
        <Text style={[styles.middleTag, {marginBottom: moderateScale(20)}]}>
          You don't have an account at{'\n'}PKO Bank Polski?
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('SelfieAccount')}
          style={[
            styles.middleButton,
            {
              // marginTop: 'auto',
              // marginBottom: moderateScale(10),
            },
          ]}>
          <Text style={styles.middleButtonTag}>
            Open an account with selfie
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.middleTag}>
            I already have a client number or an account at PKO Bank Polski or
            an account Inteligo
          </Text>
          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                marginTop: moderateScale(30),
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: '#043573',
              },
            ]}>
            <Text style={styles.middleButtonTag1}>Activate the IKO App</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Text
            onPress={() => withoutAccount.current.open()}
            style={styles.bottomButtonRowTag}>
            IKO without account
          </Text>
          <Text
            onPress={() => navigation.navigate('DemoScreen')}
            style={styles.bottomButtonRowTag}>
            App Demo
          </Text>
        </View>
      </View>
      <RBSheet
        openDuration={800}
        ref={withoutAccount}
        customStyles={{
          container: {
            borderTopLeftRadius: moderateScale(20),
            borderTopRightRadius: moderateScale(20),
          },
        }}
        height={(height / 100) * 90}>
        <Entypo
          name="cross"
          color={'#043573'}
          size={moderateScale(30)}
          style={{
            alignSelf: 'flex-end',
            marginRight: (width / 100) * 5,
            marginTop: (width / 100) * 5,
          }}
          onPress={() => withoutAccount.current.close()}
        />
        <Image
          resizeMode="contain"
          source={require('../../assets/images/IKOwithoutAccount.png')}
          style={styles.withoutAccount}
        />
        <Text style={styles.RBTopBold}>E-banking without an account</Text>
        <Text style={styles.RBScnd}>
          You do not have to be a client of PKO Bank Polski to receive a client
          number and access to the mobile IKO app and iPKO website.
        </Text>
        <Text
          style={[
            styles.RBScnd,
            {
              textAlign: 'left',
              fontSize: moderateScale(14),
              marginBottom: moderateScale(10),
            },
          ]}>
          With electronic banking without an account, you can:
        </Text>
        <View style={styles.pointWrapper}>
          <Entypo name="dot-single" color="black" size={moderateScale(20)} />
          <Text style={styles.point}>check the details of PPK and PPE,</Text>
        </View>
        <View style={styles.pointWrapper}>
          <Entypo name="dot-single" color="black" size={moderateScale(20)} />
          <Text style={styles.point}>add an account from another bank,</Text>
        </View>
        <View style={styles.pointWrapper}>
          <Entypo name="dot-single" color="black" size={moderateScale(20)} />
          <Text style={styles.point}>open an account at PKO Bank POlski,</Text>
        </View>
        <View style={styles.pointWrapper}>
          <Entypo name="dot-single" color="black" size={moderateScale(20)} />
          <Text style={styles.point}>use or products and exchange office,</Text>
        </View>
        <View style={styles.pointWrapper}>
          <Entypo name="dot-single" color="black" size={moderateScale(20)} />
          <Text style={styles.point}>view the foreign currency account.</Text>
        </View>
        <View style={styles.bottomBulbWrapper}>
          <Foundation
            name="lightbulb"
            color="#043573"
            size={moderateScale(28)}
            style={{
              backgroundColor: 'white',
              padding: moderateScale(3),
              borderRadius: 100,
              width: moderateScale(40),
              height: moderateScale(40),
              textAlign: 'center',
              textAlignVertical: 'center',
            }}
          />
          <Text
            style={{
              color: 'black',
              fontFamily: Theme.fontFamily.regular,
              fontSize: moderateScale(13),
              paddingLeft: moderateScale(10),
              width: width - (width / 100) * 10 - moderateScale(70),
            }}>
            To have access to all functionalities of on-line banking{' '}
            <Text
              style={{
                color: '#99CAC5',
                textDecorationLine: 'underline',
              }}>
              open a selfie account in Pko Bank Polski
            </Text>
            .
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.RBBottomButtonContainer}>
          <Text style={styles.RBBottomButtonText}>Gain access</Text>
        </TouchableOpacity>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(55),
    borderBottomWidth: 1,
    borderColor: 'grey',
    width: width,
  },
  headerTag: {
    color: 'black',
    fontSize: moderateScale(20),
    fontFamily: Theme.fontFamily.bold,
    // marginLeft: moderateScale(5),
  },
  mainImage: {
    width: width / 1.75,
    resizeMode: 'contain',
    height: (height / 100) * 18,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  middleTag: {
    color: '#4E4E4E',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.medium,
    width: (width / 100) * 90,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 'auto',
  },
  middleButton: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    borderRadius: moderateScale(7),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#DB922C',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  middleButtonTag: {
    color: 'black',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.medium,
  },
  middleButtonTag1: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.medium,
  },
  bottomContainer: {
    backgroundColor: '#F2F2F2',
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  bottomButtonContainer: {
    marginTop: 20,
    height: moderateScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (width / 100) * 7,
  },
  bottomButtonRowTag: {
    color: '#043573',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.medium,
    height: '90%',
    textAlignVertical: 'center',
  },
  withoutAccount: {
    height: height / 7,
    alignSelf: 'center',
  },
  RBTopBold: {
    fontFamily: Theme.fontFamily.semi,
    color: 'black',
    fontSize: moderateScale(17),
    textAlign: 'center',
    marginTop: moderateScale(5),
  },
  RBScnd: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
    textAlign: 'center',
    paddingHorizontal: (width / 100) * 5,
    marginTop: moderateScale(10),
  },
  pointWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: (width / 100) * 5,
  },
  point: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
  },
  bottomBulbWrapper: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: (width / 100) * 90,
    backgroundColor: '#F2F2F2',
    elevation: moderateScale(2),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  RBBottomButtonContainer: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    backgroundColor: '#043573',
    alignSelf: 'center',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.select({
      android: moderateScale(10),
      ios: moderateScale(30),
    }),
    borderTopLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
  RBBottomButtonText: {
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(15),
  },
});

export default AuthScreen;
