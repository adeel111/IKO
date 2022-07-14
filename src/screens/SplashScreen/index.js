import React, {useEffect} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('DemoScreen');
    }, 2500);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'#043573'}
      />
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.middleBar}
      />
      <Text style={styles.text}>IKO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCircle: {
    width: width / 6,
    height: width / 6,
    borderRadius: 100,
    backgroundColor: '#E4202C',
    marginBottom: '7%',
  },
  middleBar: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
    // height: moderateScale(15),
    // backgroundColor: 'red',
  },
  text: {
    color: 'black',
    fontFamily: Theme.fontFamily.bold,
    fontSize: width / 4,
    // marginTop: moderateScale(20),
  },
});

export default SplashScreen;
