import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, ScrollView, View, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Accounts from './Accounts';
import Cards from './Cards';
import Saving from './Saving';
import LoansCredits from './LoansCredits';
import Investing from './Investing';
import Insurance from './Insurance';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';

const {width, height} = Dimensions.get('window');

const MyProducts = ({navigation}) => {
  const [selected, setSelected] = useState(0);

  const swipe = useRef();
  const AF = useRef();

  useEffect(() => {
    scroll();
  }, [selected]);

  const scroll = () => {
    if (selected === 0)
      AF.current.scrollTo({
        x: 0,
        animated: true,
      });
    else if (selected === 1)
      AF.current.scrollTo({
        animated: true,
        x: 108,
      });
    else if (selected === 2)
      AF.current.scrollTo({
        animated: true,
        x: 189,
      });
    else if (selected === 3)
      AF.current.scrollTo({
        animated: true,
        x: 277,
      });
    else if (selected === 4)
      AF.current.scrollTo({
        animated: true,
        x: 448,
      });
    else if (selected === 5) AF.current.scrollToEnd({animated: true});
  };

  const data = [
    'Accounts',
    'Cards',
    'Saving',
    'Loans and credits',
    'Investing',
    'Insurance',
  ];

  const PaginationComponent = () => {
    return (
      <View
        style={{
          top: 0,
          backgroundColor: 'white',
          position: 'absolute',
          borderBottomWidth: 0.5,
          borderColor: 'grey',
        }}>
        <ScrollView
          ref={AF}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'white',
            height: moderateScale(50),
          }}>
          {data.map((k, index) => {
            return (
              <View
                style={
                  selected === index
                    ? styles.tabContainer(true)
                    : styles.tabContainer(false)
                }>
                <Text
                  onPress={() => {
                    swipe.current.scrollToIndex({index: index, animated: true});
                    setSelected(index);
                  }}
                  style={styles.tabText}>
                  {k}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppHeader title="My products" menuIcon={true} />
      <View style={styles.mainContainer}>
        <PaginationComponent />
        <SwiperFlatList
          PaginationComponent={PaginationComponent}
          ref={swipe}
          autoplayLoop={false}
          autoplay={false}
          onChangeIndex={data => {
            setSelected(data.index);
          }}
          showPagination={true}>
          <Accounts />
          <Cards />
          <Saving />
          <LoansCredits />
          <Investing />
          <Insurance />
        </SwiperFlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  tabContainer: isSelected => {
    return {
      height: '100%',
      paddingHorizontal: moderateScale(20),
      fontFamily: Theme.fontFamily.regular,
      color: 'black',
      fontSize: moderateScale(16),
      textAlignVertical: 'center',
      borderBottomWidth: 2,
      borderColor: isSelected ? '#043570' : 'white',
      justifyContent: 'center',
    };
  },
  selectedTabText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
  tabText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
  },
});

export default MyProducts;
