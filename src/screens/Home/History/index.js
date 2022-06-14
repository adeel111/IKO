import React, {useState, useEffect} from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AppHeader from '../../../components/AppHeader';
import moment from 'moment';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import Loading from '../../../components/Loading';
import styles from './styles';

const dataArr = [
  {
    title: '14.05.2015',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        price: '10,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA',
        price: '100,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL',
        price: '-245,00 PLN',
      },
    ],
  },
  {
    title: '26.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY',
        price: '-10,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        price: '-100,01 PLN',
      },
    ],
  },
  {
    title: '25.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        price: '100,02 PLN',
      },
    ],
  },
  {
    title: '24.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        price: '100,03 PLN',
      },
    ],
  },
];

const History = ({navigation}) => {
  const [data, setSetData] = useState(dataArr);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData();
    }, 500);
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
        setSetData(response.data.data);
        setIsLoading(false);
        console.log(JSON.stringify(response.data.data));
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

  const RenderChildItem = ({item}) => {
    return (
      <View style={styles.childItemContainer}>
        <Text style={styles.titleTxtStyle}>{item.title}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.descTxtStyle}>{item.method}</Text>
          <Text style={styles.titleTxtStyle(item.id == 14)}>
            {item.id == 14 ? '-' + item.amount + 'N' : item.amount + 'N'}
          </Text>
        </View>
      </View>
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
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabContainer(selectedTab)}
          onPress={() => setSelectedTab(true)}>
          <Text style={styles.btntxtStyle}>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tabContainer(!selectedTab)}
          onPress={() => setSelectedTab(false)}>
          <Text style={styles.btntxtStyle}>Debits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default History;
