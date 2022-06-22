import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SafeAreaView from 'react-native-safe-area-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
import {resetQuickAccess, saveQuickAccess} from '../../redux/actions/auth';
import AppStatusBar from '../../components/AppStatusBar';
import AppBackHeader from '../../components/AppBackHeader';

const {width, height} = Dimensions.get('window');

const CustomizeQuickAccess = ({navigation}) => {
  const {quickAcess} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const renderItem = ({item, drag, isActive}) => {
    return item.no !== 7 ? (
      <TouchableOpacity
        onLongPress={drag}
        activeOpacity={0.5}
        style={[
          styles.item,
          {
            width: isActive ? (width / 100) * 95 : (width / 100) * 90,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleHideShow(item)}
          style={styles.leftItem}>
          <AntDesign
            name={item.show ? 'minuscircle' : 'pluscircle'}
            size={moderateScale(18)}
            color={item.show ? '#E4202C' : '#043573'}
          />
          <Text
            style={[
              styles.leftItemText,
              {
                color: item.show ? '#E4202C' : '#043573',
              },
            ]}>
            {item.show ? 'hide' : 'show'}
          </Text>
        </TouchableOpacity>
        <View style={styles.rightItem}>
          <Text style={styles.flatLIstTag}>{item.tag}</Text>
          <FontAwesome5
            name="grip-lines"
            size={moderateScale(15)}
            color="#D9D9D9"
          />
        </View>
      </TouchableOpacity>
    ) : (
      <Text style={styles.flatlistHeader}>{item.text}</Text>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <Text style={styles.flatlistHeader}>
          Hold and drag functions to rearrange them on the screen before login.
          {'\n\n'}Features available without logging in
        </Text>
        {quickAcess.filter(f => f.show === true).length === 0 ? (
          <Text
            style={[
              styles.flatlistHeader,
              {
                color: '#A7A7A7',
              },
            ]}>
            Hold and drag the item here if you want to change its display
          </Text>
        ) : null}
      </>
    );
  };

  const ListFooterComponent = () => {
    return quickAcess.filter(f => f.show === false).length === 0 ? (
      <Text
        style={[
          styles.flatlistHeader,
          {
            color: '#A7A7A7',
          },
        ]}>
        Hold and drag the item here if you want to change its display
      </Text>
    ) : null;
  };

  const handleDrag = data => {
    let change = true;
    let sendData = data.map(k => {
      if (k.no === 7) {
        change = false;
        return k;
      } else {
        return {
          ...k,
          show: change,
        };
      }
    });
    dispatch(saveQuickAccess(sendData));
  };

  const handleReset = () => {
    dispatch(resetQuickAccess());
  };

  const handleHideShow = item => {
    var tempData = quickAcess;
    if (item.show === true) {
      var index = quickAcess.indexOf(item);
      tempData.splice(index, 1);
      tempData.splice(12, 0, {...item, show: false});
      dispatch(saveQuickAccess(tempData));
    } else if (item.show === false) {
      var index = quickAcess.indexOf(item);
      var otherItem = {
        no: 7,
        text: 'Add features',
      };
      var otherIndex = quickAcess.findIndex(checkotherIndex);
      tempData.splice(index, 1);
      tempData.splice(otherIndex, 0, {...item, show: true});
      dispatch(saveQuickAccess(tempData));
    }
  };

  function checkotherIndex(index) {
    return index.no === 7;
  }

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader title={'Customize Quick Access'} isMenu={false} />
      <DraggableFlatList
        data={quickAcess}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item + index).toString()}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{
          paddingBottom: moderateScale(100),
        }}
        containerStyle={{
          height: height - moderateScale(140),
        }}
        onDragEnd={({data}) => handleDrag(data)}
        ListFooterComponent={ListFooterComponent}
      />
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleReset()}
          style={styles.bottomButtonContainer}>
          <Text style={styles.bottomButtonTag}>Reset to default</Text>
        </TouchableOpacity>
      </View>
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
  bottomButtonWrapper: {
    marginTop: 'auto',
    paddingVertical: moderateScale(15),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderTopWidth: 0.5,
  },
  bottomButtonContainer: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: moderateScale(7),
    borderColor: 'grey',
  },
  bottomButtonTag: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(16),
  },
  flatlistHeader: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    paddingHorizontal: (width / 100) * 5,
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
    fontSize: moderateScale(15),
  },
  item: {
    height: moderateScale(50),
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(15),
    borderRadius: moderateScale(3),
    elevation: moderateScale(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItem: {
    paddingLeft: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: moderateScale(10),
    width: '28%',
    flexDirection: 'row',
    height: '100%',
    borderRightWidth: 0.5,
    borderColor: 'grey',
  },
  leftItemText: {
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '72%',
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(10),
  },
  flatLIstTag: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
});

export default CustomizeQuickAccess;
