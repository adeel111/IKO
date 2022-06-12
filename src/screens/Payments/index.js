import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Easing,
  Animated,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import IndividualProfile from '../../components/IndividualProfile';

const {width, height} = Dimensions.get('window');

const Payments = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showProfile, setShowProfile] = useState(false);

  const data = [
    {
      title: 'Transfers',
      data: [
        {
          title: 'Bank transfer',
          source: require('../../assets/images/money.png'),
        },
        {
          title: 'Own transfer',
          source: require('../../assets/images/owntransfer.png'),
        },
        {
          title: 'Mobile transfer',
          source: require('../../assets/images/mobile.png'),
        },
        {
          title: 'Scan and transfer',
          source: require('../../assets/images/qrcode.png'),
        },
        {
          title: 'Standing orders',
          source: require('../../assets/images/calendar.png'),
        },

        {
          title: 'Multiple transfers',
          source: require('../../assets/images/money.png'),
        },
        {
          title: 'Tax transfer',
          source: require('../../assets/images/tax.png'),
        },
        {
          title: 'Foreign transfer',
          source: require('../../assets/images/transaction.png'),
        },
      ],
    },
    {
      title: 'Mobile Payments',
      data: [
        {
          title: 'BLIK Code',
          source: require('../../assets/images/Blik.jpg'),
          full: true,
        },
        {
          title: 'BLIK vouchers',
          source: require('../../assets/images/voucher.png'),
        },
        {
          title: 'Pay without BLIK code',
          source: require('../../assets/images/blikCodewithout.png'),
        },
        {
          title: 'Transport tickets',
          source: require('../../assets/images/ticket.png'),
        },
        {
          title: 'Parking fee',
          source: require('../../assets/images/carParking.png'),
        },
      ],
    },
    {
      title: 'Other operations',
      data: [
        {
          title: 'Mobile top-up',
          source: require('../../assets/images/smartphone.png'),
        },
        {
          title: 'Transfer request',
          source: require('../../assets/images/comment.png'),
        },
        {
          title: 'Create QR code',
          source: require('../../assets/images/qrcode.png'),
        },
        {
          title: 'Direct debits',
          source: require('../../assets/images/calendar.png'),
        },
        {
          title: 'Western Union',
          source: require('../../assets/images/wu.png'),
        },
        {
          title: 'Currency Exchange',
          source: require('../../assets/images/exchange.png'),
        },
      ],
    },
  ];

  useEffect(() => {
    if (showProfile) {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
    }
  }, [showProfile]);

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

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>{item.title}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: moderateScale(20),
          }}>
          <FlatList
            data={item.data}
            numColumns={3}
            renderItem={ChildRenderItem}
            contentContainerStyle={{
              backgroundColor: 'white',
            }}
          />
        </View>
      </View>
    );
  };

  const ChildRenderItem = ({item, index}) => {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.circle,
            {
              backgroundColor: '#043574',
            },
          ]}>
          <Image
            resizeMode={item.full ? 'cover' : 'contain'}
            source={item.source}
            style={{
              width: item.full ? '100%' : moderateScale(30),
              height: item.full ? '100%' : moderateScale(30),
            }}
          />
        </TouchableOpacity>
        <Text style={styles.buttonTag}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppHeader
        title="Payments"
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
      />
      {showProfile ? (
        <IndividualProfile />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerTextView: {
    height: moderateScale(45),
    justifyContent: 'center',
  },
  secitonListHeader: {
    paddingLeft: (width / 100) * 5,
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
  buttonWrapper: {
    width: moderateScale(110),
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(10),
  },
  circle: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D49',
  },
  buttonTag: {
    textAlign: 'center',
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
  },
});

export default Payments;
