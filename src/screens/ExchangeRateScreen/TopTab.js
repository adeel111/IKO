import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const Tab = createMaterialTopTabNavigator();

const {width, height} = Dimensions.get('window');

const data = [
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
  {
    selected: false,
  },
];

const Cash = () => {
  const [itemData, setItemData] = useState(data);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          let temp = itemData.map((k, kIndex) => {
            if (kIndex === index) return {selected: !item.selected};
            else return k;
          });
          setItemData(temp);
        }}
        style={[
          styles.fieldContainer,
          {
            height:
              item.selected === true ? moderateScale(90) : moderateScale(60),
          },
        ]}>
        <View
          style={{
            width: '50%',
          }}>
          <View style={[styles.field, {width: '100%'}]}>
            <Image
              source={require('../../assets/images/pakistan.png')}
              resizeMode="cover"
              style={{
                height: moderateScale(40),
                width: moderateScale(40),
              }}
            />
            <Text
              style={{
                color: 'black',
                fontFamily: Theme.fontFamily.regular,
                fontSize: moderateScale(18),
              }}>
              PKR
            </Text>
          </View>
          {item.selected === true && (
            <>
              <Text style={styles.extended}>Country : Pakistan</Text>
              <Text style={styles.extended}>Mid rate : 4,3832</Text>
            </>
          )}
        </View>
        <View
          style={{
            width: '30%',
          }}>
          <View style={styles.field}>
            <FontAwesome
              name={index % 2 === 0 ? 'arrow-up' : 'arrow-down'}
              size={moderateScale(16)}
              color={index % 2 === 0 ? 'green' : '#E4202C'}
            />
            <Text style={styles.fieldText}>4,4194</Text>
          </View>
          {item.selected === true && (
            <Text
              style={[
                styles.extendedNo,
                {color: index % 2 === 1 ? '#E3545D' : 'green'},
              ]}>
              {index % 2 === 1 ? '-0,46%' : '0,17%'}
            </Text>
          )}
        </View>
        <View
          style={{
            width: '30%',
          }}>
          <View style={styles.field}>
            <FontAwesome
              name={index % 2 === 0 ? 'arrow-up' : 'arrow-down'}
              size={moderateScale(16)}
              color={index % 2 === 0 ? 'green' : '#E4202C'}
            />
            <Text style={styles.fieldText}>4,4194</Text>
          </View>
          {item.selected === true && (
            <Text
              style={[
                styles.extendedNo,
                {color: index % 2 === 1 ? '#E3545D' : 'green'},
              ]}>
              {index % 2 === 1 ? '-0,46%' : '0,17%'}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={itemData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontFamily: Theme.fontFamily.regular,
                  marginLeft: (width / 100) * 5,
                  marginTop: moderateScale(10),
                }}>
                Publication date 23.05.2022 07:50
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: moderateScale(15),
                  marginBottom: moderateScale(10),
                }}>
                <Text style={styles.topHeading}>Buy</Text>
                <Text style={styles.topHeading}>Sell</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const TopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Cash"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: moderateScale(16),
          fontFamily: Theme.fontFamily.regular,
          color: 'black',
        },
      }}>
      <Tab.Screen
        name="Cash"
        component={Cash}
        options={{
          tabBarLabel: 'Cash',
          tabBarIndicatorStyle: {backgroundColor: '#043573'},
        }}
      />
      <Tab.Screen
        name="Non Cash"
        component={Cash}
        options={{
          tabBarLabel: 'Non Cash',
          tabBarIndicatorStyle: {backgroundColor: '#043573'},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  topHeading: {
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
    width: (width / 100) * 25,
    textAlign: 'center',
    paddingRight: (width / 100) * 5,
  },
  fieldContainer: {
    width: width,

    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (width / 100) * 5,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  fieldText: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(5),
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
  },
  extended: {
    color: '#272727',
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.regular,
    marginLeft: moderateScale(5),
  },
  extendedNo: {
    color: '#E3545D',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
    marginRight: moderateScale(15),
    marginTop: moderateScale(10),
  },
});

export default TopTab;
