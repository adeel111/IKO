import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import Loading from '../../../components/Loading';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from '../../../Theme/Dimensions';

const MyData = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData();
    }, 300);
  }, []);

  const getData = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://workingsoftwarecopy.xyz/api/personal-detail',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData(response?.data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

  const RenderRow = ({title, value, isArrow = true}) => {
    return (
      <>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.titleTxtStyle}>{title}</Text>
            <Text style={styles.valTxtStyle}>{value}</Text>
          </View>
          {isArrow && (
            <MaterialIcons
              name="arrow-forward-ios"
              color="black"
              size={moderateScale(20)}
            />
          )}
        </View>
        <View style={styles.lineView} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <Loading visible={isLoading} />
      <AppBackHeader
        title={'My data'}
        isBackIcon
        isMenu={false}
        onPress={() => setMenuOpened(true)}
      />
      <ScrollView
        style={{marginBottom: 30}}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.missingDataView}>
          <Text style={styles.missingTxtStyle}>Complete missing data</Text>
          <Text style={styles.descTxtStyle}>
            This is the only way to use all of the bank's possibilities, and we
            will take care of the safety of your finances.
          </Text>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>Personal Data</Text>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.lineView} />
          <RenderRow
            title={'First name and surname'}
            value={data?.name}
            isArrow={false}
          />
          <RenderRow title={'PESEL No.'} value={data?.pesel_no} />
          <RenderRow title={'ID card'} value={data?.id_card} />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>Contact details</Text>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.lineView} />
          <RenderRow title={'Main telephone number'} value={data?.telephone} />
          <RenderRow
            title={'Mobile number for notifications'}
            value={data?.mobile}
          />
          <RenderRow title={'E-mail address'} value={data?.email} />
          <RenderRow title={'Correspondence address'} value={data?.address} />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.secitonListHeader}>Contact details</Text>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.titleTxtStyle}>Marketing consents</Text>
            </View>
            <MaterialIcons
              name="arrow-forward-ios"
              color="black"
              size={moderateScale(20)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyData;
