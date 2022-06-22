import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const Contact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader title={'Contact'} isMenu={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(50),
        }}>
        <Text style={styles.heading}>Call us</Text>
        <View style={styles.whiteContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.circle}>
              <Feather
                name="phone-call"
                color={'white'}
                size={moderateScale(30)}
              />
            </TouchableOpacity>
            <Text style={styles.buttonTag}>Helpline{'\n'}24/7</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <Feather
                name="phone-call"
                color={'white'}
                size={moderateScale(30)}
              />
            </TouchableOpacity>
            <Text style={styles.buttonTag}>Car{'\n'}assistance</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <Feather
                name="phone-call"
                color={'white'}
                size={moderateScale(30)}
              />
            </TouchableOpacity>
            <Text style={styles.buttonTag}>Travel{'\n'}assistance</Text>
          </View>
        </View>
        <Text style={styles.heading}>Send us a message</Text>
        <View style={styles.whiteContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <AntDesign name="mail" color={'white'} size={moderateScale(30)} />
            </TouchableOpacity>
            <Text style={styles.buttonTag}>Send an{'\n'}e-mail</Text>
          </View>
        </View>
        <Text style={styles.heading}>Visit us</Text>
        <View style={styles.whiteContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: Theme.fontFamily.bold,
                  fontSize: moderateScale(16),
                }}>
                i
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  PKO
                </Text>
              </Text>
            </TouchableOpacity>
            <Text style={styles.buttonTag}>
              IPKO biznes{'\n'}mobile service
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: Theme.fontFamily.bold,
                  fontSize: moderateScale(16),
                }}>
                i
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                  }}>
                  PKO
                </Text>
              </Text>
            </TouchableOpacity>
            <Text style={styles.buttonTag}>iPKO internet{'\n'}banking</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.circle,
                {
                  backgroundColor: '#043574',
                },
              ]}>
              <MaterialCommunityIcons
                name="map-marker-path"
                color={'white'}
                size={moderateScale(30)}
              />
            </TouchableOpacity>
            <Text style={styles.buttonTag}>Branches and{'\n'}ATMs</Text>
          </View>
        </View>
      </ScrollView>
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
  heading: {
    color: '#404040',
    marginVertical: moderateScale(15),
    paddingLeft: (width / 100) * 5,
  },
  whiteContainer: {
    paddingVertical: moderateScale(20),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonWrapper: {
    width: moderateScale(110),
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
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

export default Contact;
