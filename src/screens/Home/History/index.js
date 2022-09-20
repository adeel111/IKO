import React, {useState, useEffect} from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from '../../../components/AppHeader';
import moment from 'moment';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import Loading from '../../../components/Loading';
import styles from './styles';

const History = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(true);

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
      url: 'https://workingsoftwarecopy.xyz/api/get-history',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

  const RenderChildItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.childItemContainer}
        onPress={() => {
          navigation.navigate('OperationDetails', {details: item});
        }}>
        <Text style={styles.titleTxtStyle}>{item.title}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.descTxtStyle}>{item.method}</Text>
          <Text style={styles.titleTxtStyle}>{item.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <Loading visible={isLoading} />
      <AppBackHeader
        title="Account history"
        isBackIcon={true}
        isFilterIcon={true}
        isMenu={false}
      />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <RenderChildItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.headerTextView}>
            <Text style={styles.secitonListHeader}>
              {moment(title).format('L')}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.tabsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabContainer(selectedTab)}
          onPress={() => setSelectedTab(true)}
        >
          <Text style={styles.btntxtStyle}>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabContainer(!selectedTab)}
          onPress={() => setSelectedTab(false)}
        >
          <Text style={styles.btntxtStyle}>Debits</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default History;
