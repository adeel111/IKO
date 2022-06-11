import React from 'react';
import {Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const Offers = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
      }}
      forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppHeader title={'Offers'} />
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
    </SafeAreaView>
  );
};

export default Offers;
