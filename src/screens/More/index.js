import React, {useRef, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import Theme from '../../Theme/Theme';
import SafeAreaView from 'react-native-safe-area-view';
import {moderateScale} from '../../Theme/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import IndividualProfile from '../../components/IndividualProfile';

const {width, height} = Dimensions.get('window');

const data = [
  {
    title: 'Services',
    data: [
      {
        title: 'Currency exchange',
        source: require('../../assets/images/currencies.png'),
      },
      {
        title: 'Transport tickets',
        source: require('../../assets/images/transportTicket.png'),
      },
      {
        title: 'Parking fee',
        source: require('../../assets/images/parkingFee.png'),
      },
      {
        title: 'Mobile top-up',
        source: require('../../assets/images/mobileMore.png'),
      },
    ],
  },
  {
    title: 'My Affairs',
    data: [
      {
        title: 'My agreements',
        source: require('../../assets/images/contract.png'),
      },
      {title: 'Contacts', source: require('../../assets/images/phone.png')},
      {
        title: 'Bank branches and ATMs',
        source: require('../../assets/images/distance.png'),
      },
    ],
  },
  {
    title: 'Others',
    data: [
      {
        title: 'Join our Case',
        source: require('../../assets/images/heart.png'),
      },
      {
        title: 'Exchange rates',
        source: require('../../assets/images/taxes.png'),
      },
      {
        title: 'About IKO',
        source: require('../../assets/images/information.png'),
      },
      {
        title: 'Recommend IKO',
        source: require('../../assets/images/like.png'),
      },
    ],
  },
];

const More = ({navigation}) => {
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

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>{item.title}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
          }}
        >
          <FlatList
            data={item.data}
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
      <TouchableOpacity activeOpacity={1} style={styles.childWrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={item.source}
            resizeMode="contain"
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
            }}
          />
          <Text style={styles.childTag}>{item.title}</Text>
        </View>
        <FontAwesome
          name="angle-right"
          color="#043570"
          size={moderateScale(22)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppHeader
        title="See more"
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
        <ScrollView style={styles.mainContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
          />
          <TouchableOpacity activeOpacity={1} style={styles.bottomButton}>
            <EvilIcons
              name="gear"
              color="#043570"
              size={moderateScale(22)}
              style={{
                marginRight: moderateScale(10),
              }}
            />
            <Text style={styles.bottomButtonTag}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.bottomButton,
              {
                backgroundColor: '#043570',
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
                borderWidth: 0,
                marginBottom: moderateScale(20),
              },
            ]}
            onPress={() => navigation.replace('DemoScreen')}
          >
            <SimpleLineIcons
              name="logout"
              color="white"
              size={moderateScale(22)}
              style={{
                marginRight: moderateScale(10),
              }}
            />
            <Text
              style={[
                styles.bottomButtonTag,
                {
                  color: 'white',
                },
              ]}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
  childWrapper: {
    width: width,
    height: moderateScale(55),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (width / 100) * 5,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  childTag: {
    fontFamily: Theme.fontFamily.regular,
    marginLeft: moderateScale(30),
    color: 'black',
    fontSize: moderateScale(16),
  },
  bottomButton: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: moderateScale(20),
    elevation: moderateScale(5),
  },
  bottomButtonTag: {
    fontFamily: Theme.fontFamily.regular,
    color: 'black',
    fontSize: moderateScale(15),
  },
});

export default More;
