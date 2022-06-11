import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import SafeAreaView from 'react-native-safe-area-view';
import Image from 'react-native-scalable-image';

import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AppStatusBar from '../../components/AppStatusBar';

const {width, height} = Dimensions.get('window');

const IKOManual = ({navigation}) => {
  const [index, setIndex] = useState(0);

  const swipe = useRef();

  const renderPagination = index => {
    return index !== 4 ? (
      <View
        style={{
          width: width,
          height: moderateScale(65),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: (width / 100) * 5,
        }}>
        <Text
          onPress={() => navigation.goBack()}
          style={styles.paginationButtonTag}>
          Skip
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: Platform.select({android: 0, ios: 23}),
          }}>
          {[0, 1, 2, 3, 4].map(k => {
            return (
              <View style={k === index ? styles.selected : styles.unselected} />
            );
          })}
        </View>
        <Text
          onPress={() => swipe.current.scrollBy(1)}
          style={styles.paginationButtonTag}>
          Next
        </Text>
      </View>
    ) : (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.goBack()}
        style={styles.bottomButton}>
        <Text style={styles.bottomButtonTag}>OK</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar color={'#043573'} />
      <Swiper
        ref={swipe}
        loop={false}
        renderPagination={renderPagination}
        index={index}>
        <View style={styles.swiperContainer}>
          <View
            style={{
              backgroundColor: '#043573',
              alignItems: 'center',
            }}>
            <Image
              width={width}
              source={require('../../assets/images/Manual1.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Navigation bar</Text>
          <Text style={styles.secondText}>
            Use icons on the bottom navigation bar to explore the IKO app and
            switch between top-level views in a single tap: payments, your
            product and inbox.
          </Text>
        </View>
        <View style={styles.swiperContainer}>
          <View
            style={{
              backgroundColor: '#043573',
              alignItems: 'center',
            }}>
            <Image
              width={width}
              source={require('../../assets/images/Manual2.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Shortcuts button</Text>
          <Text style={styles.secondText}>
            Have an easy access to your favorite IKO features.
          </Text>
        </View>
        <View style={styles.swiperContainer}>
          <View
            style={{
              backgroundColor: '#043573',
              alignItems: 'center',
            }}>
            <Image
              width={width}
              source={require('../../assets/images/Manual3.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Customize your dashboard</Text>
          <Text style={styles.secondText}>
            Go to settings and choose the order of tiles on the dashboard or
            remove them if you do not wish to see them after logging in.
          </Text>
        </View>
        <View style={styles.swiperContainer}>
          <View
            style={{
              backgroundColor: '#043573',
              alignItems: 'center',
            }}>
            <Image
              width={width}
              source={require('../../assets/images/Manual4.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Context menu</Text>
          <Text style={styles.secondText}>
            Click the vertical three dots icon (menu overflow) to open
            additional options which are dedicated for current app view.
          </Text>
        </View>
        <View style={styles.swiperContainer}>
          <View
            style={{
              backgroundColor: '#043573',
              alignItems: 'center',
            }}>
            <Image
              width={width}
              source={require('../../assets/images/Manual5.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>View your account balance</Text>
          <Text style={styles.secondText}>
            Check your account balance without logging in to the IKO app. Go to
            "Settings" to turn on this option.
          </Text>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topText: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    fontFamily: Theme.fontFamily.semi,
    marginTop: moderateScale(30),
    color: 'black',
  },
  secondText: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
    width: (width / 100) * 80,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  boldText: {
    fontFamily: Theme.fontFamily.semi,
  },
  paginationButtonTag: {
    color: '#043573',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
    width: moderateScale(50),
    height: moderateScale(50),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  unselected: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: moderateScale(5),
  },
  selected: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 100,
    backgroundColor: '#043573',
    marginHorizontal: moderateScale(5),
  },
  bottomButtonTag: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.medium,
  },
  bottomButton: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    backgroundColor: '#043573',
    borderTopLeftRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: moderateScale(10),
    borderBottomRightRadius: moderateScale(5),
    elevation: moderateScale(5),
  },
});

export default IKOManual;
