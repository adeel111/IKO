import React, {useRef, useState, useEffect} from 'react';
import {Text, Animated, Easing} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import IndividualProfile from '../../components/IndividualProfile';

const Offers = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showProfile, setShowProfile] = useState(false);

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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
      }}
      forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppHeader
        title="Offers"
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
        <Text
          style={{
            width: '90%',
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: moderateScale(30),
            color: 'black',
            fontFamily: Theme.fontFamily.regular,
            fontSize: moderateScale(16),
          }}>
          There are no dedicated credit offers for you. In order to get more
          information about our credit offers, please contact our helpline or
          visit the closest bank branch.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Offers;
