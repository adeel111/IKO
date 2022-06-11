import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

const SelfieAccount = ({navigation}) => {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Entypo
            name="cross"
            color={'#043573'}
            size={moderateScale(30)}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTag}>Open Account</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/selfieAccount.png')}
        style={styles.topImage}
      />
      <Text style={styles.bold}>
        You can open the selfie account only when you are a holder of a Polish
        identity card.
      </Text>
      <Text style={styles.light}>
        If you have another identity document, you can open the account in a
        Bank branch or fill in a form and our consultatns will get in touch with
        you.
      </Text>
      <View
        style={{
          marginTop: 'auto',
          paddingVertical: moderateScale(10),
        }}>
        <TouchableOpacity activeOpacity={0.7} style={styles.bottonContainer}>
          <Text style={styles.bottonTextStyle}>
            I have a different document
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bottonBlueContainer}>
          <Text style={styles.bottonBlueTextStyle}>
            I have an ID card - open account
          </Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'flex-start',
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
    marginLeft: moderateScale(15),
  },
  topImage: {
    height: height / 4,
    marginTop: moderateScale(30),
  },
  bold: {
    fontFamily: Theme.fontFamily.medium,
    color: 'black',
    paddingHorizontal: (width / 100) * 5,
    textAlign: 'left',
    fontSize: moderateScale(18),
    marginTop: moderateScale(30),
  },
  light: {
    fontFamily: Theme.fontFamily.regular,
    color: 'black',
    paddingHorizontal: (width / 100) * 5,
    textAlign: 'left',
    fontSize: moderateScale(15),
    marginTop: moderateScale(10),
  },
  bottonContainer: {
    width: (width / 100) * 90,
    height: moderateScale(50),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonTextStyle: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  bottonBlueContainer: {
    marginTop: 15,
    width: (width / 100) * 90,
    height: moderateScale(50),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#043573',
  },
  bottonBlueTextStyle: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
});

export default SelfieAccount;
