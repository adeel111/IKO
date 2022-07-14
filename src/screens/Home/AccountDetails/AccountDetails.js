import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SectionList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import Loading from '../../../components/Loading';
import moment from 'moment';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';

const AccountDetails = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState(true);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData();
      getDetails();
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
        console.log(JSON.stringify(response.data.data));
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

  const getDetails = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://workingsoftwarecopy.xyz/api/histry-detail',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setDetails(response?.data?.data);
        console.log(JSON.stringify(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const RenderChildItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.childItemContainer}
        onPress={() => {
          navigation.navigate('OperationDetails', {details: item?.details});
        }}
      >
        <Text style={styles.titleTxtStyle}>{item.title}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.descTxtStyle}>{item.method}</Text>
          <Text style={styles.titleTxtStyle}>{item.amount + 'N'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderHistory = () => {
    return (
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
    );
  };

  const RenderDetails = () => {
    return (
      <View>
        <View style={{padding: 20}}>
          <Text style={styles.headTxtStyle}>ACCOUNT NUMBER</Text>
          <Text style={styles.valueTxtStyle}>{details?.number}</Text>
          <Text style={styles.headTxtStyle}>ACCOUNT NAME</Text>
          <Text style={styles.valueTxtStyle}>{details?.nazwa}</Text>
          <Text style={styles.headTxtStyle}>AVAILABLE BALANCE</Text>
          <Text style={styles.valueTxtStyle}>{details?.saldo_deste}</Text>
          <Text style={styles.headTxtStyle}>ACCOUNTING BALANCE</Text>
          <Text style={styles.valueTxtStyle}>{details?.saldo_k}</Text>
          {/* <Text style={styles.headTxtStyle}>BRANCH LEADING THE ACCOUNT</Text>
          <Text style={styles.valueTxtStyle}>{details?.oprocent}</Text> */}
          <Text style={styles.headTxtStyle}>INTEREST INCOME</Text>
          <Text style={styles.valueTxtStyle}>{details?.oprocent}</Text>
          <Text style={styles.headTxtStyle}>OPENING DATE</Text>
          <Text style={styles.valueTxtStyle}>{details?.data_ot}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.headTxtStyle}>AUTOSAVING</Text>
            <Text style={styles.numberTxtStyle1}>Change</Text>
          </View>
          <Text style={[styles.valueTxtStyle, {marginBottom: 0}]}>
            {details?.automaty}
          </Text>
        </View>
        <View style={[styles.headerTextView, {backgroundColor: 'lightgray'}]}>
          <Text style={styles.secitonListHeader}>Participants</Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={styles.headTxtStyle}>
            Due to security reasons, we did the list of account{'\n'}holders and
            proxies
          </Text>
          <Text style={[styles.numberTxtStyle1, {marginTop: 20}]}>
            Show participants
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
        title={'Account details'}
        isBackIcon
        onPress={() => setMenuOpened(true)}
      />
      <View style={{alignItems: 'flex-end'}}>
        <Menu
          onBackdropPress={() => setMenuOpened(false)}
          opened={menuOpened}
          style={styles.menuContainer}
        >
          <MenuTrigger text="" />
          <MenuOptions optionsContainerStyle={styles.menuStyle}>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>
                Uncompleted transactions
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>Blocked balance</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>
                Share your account number
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>Create QR code</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>Edit name</Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>
                Account balance before login
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>
                Push notifications settings
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>Auto-saving</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtStyle}>PKO Bank Polski</Text>
          </View>
          <Text style={styles.bankTxtStyle}>PKO KONTO BEZ GRANIC </Text>
          <Text style={styles.numberTxtStyle}>
            {route?.params?.number}
            <Text style={styles.numberTxtStyle1}> Copy the number</Text>
          </Text>
          <Text style={styles.availableFunds}>Available funds</Text>
          <Text style={styles.funds}>{route?.params?.balance}</Text>
          <View style={styles.rowContainer1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.swiperButtonContainer}
              //   onPress={() => navigation.navigate('Transfer')}
            >
              <Text style={styles.swiperButtonTag}>Transfer</Text>
            </TouchableOpacity>
            <View style={{width: '45%'}}>
              <Text style={styles.balanceTxtStyle}>{`Blocked balance >`}</Text>
              <Text style={styles.numberTxtStyle}>-305,10 PLN</Text>
            </View>
          </View>
        </View>
        <View style={styles.tabsRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer1(selectedTab)}
            onPress={() => setSelectedTab(true)}
          >
            <Text style={styles.tabTxtStyle}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer1(!selectedTab)}
            onPress={() => setSelectedTab(false)}
          >
            <Text style={styles.tabTxtStyle}>Details</Text>
          </TouchableOpacity>
        </View>
        {selectedTab ? <RenderHistory /> : <RenderDetails />}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AccountDetails;
