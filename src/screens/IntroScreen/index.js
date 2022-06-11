import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Image from 'react-native-scalable-image';
import styles from './styles';

import {moderateScale} from '../../Theme/Dimensions';

const {width, height} = Dimensions.get('window');

const IntroScreen = ({navigation}) => {
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
          onPress={() => navigation.replace('AuthScreen')}
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
        onPress={() => navigation.replace('AuthScreen')}
        style={styles.bottomButton}>
        <Text style={styles.bottomButtonTag}>OK</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={'#043573'}
      />
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
              source={require('../../assets/images/swiper1.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Your bank in telephone</Text>
          <Text style={styles.secondText}>
            Right after logging in to IKO, you have it
            <Text style={styles.boldText}>
              {' '}
              quick and convenient access to your accounts, loans and deposits.
            </Text>
            {'\n\n'}
            You can make a transfer, display the BLIK code and get "shortcuts"
            to your favorite function
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
              source={require('../../assets/images/swiper2.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Payments and transfers</Text>
          <Text style={styles.secondText}>
            Pay for on-line shopping with a BLIK, made tax transfers and manage
            standing orders.
            <Text style={styles.boldText}> Make tranfers to phone number </Text>
            all you have to do is choose the recipient from the list of
            contacts.
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
              source={require('../../assets/images/swiper3.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>My products</Text>
          <Text style={styles.secondText}>
            In the
            <Text style={styles.boldText}> My productss </Text>
            tab, you can set up a deposit, order a new card, apply for a loan,
            buy travel insurance and insure your car.
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
              source={require('../../assets/images/swiper4.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Additional services</Text>
          <Text style={styles.secondText}>
            Currency exchange in an online currency exchange office, public
            transport tickets, parking fees, gift cards, mobile top-ups - you
            can find all this
            <Text style={styles.boldText}> in the "More" tab </Text>.
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
              source={require('../../assets/images/swiper5.png')}
              height={height / 2}
            />
          </View>
          <Text style={styles.topText}>Screen before log-in</Text>
          <Text style={styles.secondText}>
            Check how much money you have or display the BLIK code before login.
            {'\n\n'}Customize the
            <Text style={styles.boldText}> quick access screen </Text>
            to your needs.
          </Text>
        </View>
      </Swiper>
    </View>
  );
};

export default IntroScreen;
