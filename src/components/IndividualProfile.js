import React from 'react';
import {
  View,
  Text,
  Easing,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Theme from '../Theme/Theme';
import {moderateScale} from '../Theme/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from './AppButton';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {handleShowDemoCard} from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const IndividualProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userName} = useSelector(state => state.home);

  let showName = userName.split(' ');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTextView}>
        <Text style={styles.secitonListHeader}>Individual Profile</Text>
      </View>
      <Animatable.View
        animation={'slideInDown'}
        duration={300}
        easing={'linear'}
        useNativeDriver={true}
      >
        <View style={styles.innerView}>
          <View style={styles.rowContainer}>
            <View style={styles.txtContainer}>
              <Text style={styles.userName}>
                {userName === 'JI'
                  ? userName
                  : `${showName[0]?.[0]}${showName[showName.length - 1]?.[0]}`}
              </Text>
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <Text style={styles.nameTxtStyle}>
                {userName === 'JI' ? 'Jen IKO' : userName}
              </Text>
              <Text style={styles.ownerTxtStyle}>Owner</Text>
              <AntDesign
                name="check"
                color="green"
                size={moderateScale(20)}
                style={{alignSelf: 'flex-end'}}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnContainer}
                onPress={() => navigation.navigate('MyData')}
              >
                <Text style={styles.btnTxtStyle}>My data</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: 55}} />
        <View style={[styles.innerView, {paddingHorizontal: 0}]}>
          <View style={styles.iconTextRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconStyle}>+</Text>
            </View>
            <Text>Open business account</Text>
          </View>
          <View style={styles.lineView} />
          <View style={styles.iconTextRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconStyle}>+</Text>
            </View>
            <Text>Open firm and business account</Text>
          </View>
        </View>
      </Animatable.View>
      <Animatable.View
        animation={'slideInUp'}
        duration={300}
        easing={'linear'}
        style={styles.buttomViewContainer}
      >
        <AppButton
          icon="settings"
          lable="Settings"
          bgColor="white"
          textColor={'black'}
        />
        <AppButton
          onPress={() => {
            dispatch(handleShowDemoCard(true));
            navigation.replace('DemoScreen');
          }}
          icon="logout"
          lable="Log out"
          bgColor="#043570"
        />
        <AppButton
          lable="Quit DEMO"
          bgColor="red"
          textSize={18}
          onPress={() => {
            dispatch(handleShowDemoCard(true));
            navigation.replace('AuthScreen');
          }}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  innerView: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'lightgray',
    borderBottomColor: 'lightgray',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  txtContainer: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(35),
    height: moderateScale(35),
    backgroundColor: '#F2F2F2',
  },
  userName: {
    color: 'black',
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  nameTxtStyle: {
    color: 'black',
    borderRadius: 100,
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
  },
  ownerTxtStyle: {
    color: 'gray',
    borderRadius: 100,
    fontSize: moderateScale(13),
    fontFamily: Theme.fontFamily.regular,
  },
  btnContainer: {
    width: '35%',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 7,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxtStyle: {
    color: 'black',
  },
  lineView: {
    height: 1,
    width: '100%',
    marginVertical: 12,
    backgroundColor: 'lightgray',
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(35),
    height: moderateScale(35),
    backgroundColor: '#043570',
  },
  iconStyle: {
    color: 'white',
    alignSelf: 'center',
    marginTop: -2,
    fontSize: moderateScale(32),
    fontFamily: Theme.fontFamily.regular,
  },
  buttomViewContainer: {
    flex: 1,
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default IndividualProfile;
