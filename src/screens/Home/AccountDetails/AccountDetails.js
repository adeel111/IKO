import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SectionList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import moment from 'moment';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';

const dataArr = [
  {
    title: '14.05.2015',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        amount: '10,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA',
        amount: '100,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL',
        amount: '-245,00 PLN',
      },
    ],
  },
  {
    title: '26.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY',
        amount: '-10,00 PLN',
      },
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        amount: '-100,01 PLN',
      },
    ],
  },
  {
    title: '25.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        amount: '100,02 PLN',
      },
    ],
  },
  {
    title: '24.11.2014',
    data: [
      {
        title: 'PREZELEW PRZYCHODZACY NA NR TEL.',
        amount: '100,03 PLN',
      },
    ],
  },
];

const AccountDetails = ({navigation}) => {
  const [data, setData] = useState(dataArr);
  const [menuOpened, setMenuOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState(true);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  const RenderChildItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.childItemContainer}
        onPress={() => {
          navigation.navigate('OperationDetails');
        }}
      >
        <Text style={styles.titleTxtStyle}>{item.title}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.descTxtStyle}>PREZELEW MOBILNY</Text>
          {/* <Text style={styles.descTxtStyle}>{item.method}</Text> */}
          <Text style={styles.titleTxtStyle(item.id == 14)}>{item.amount}</Text>
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
              {title}
              {/* {moment(title).format('L')} */}
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
          <Text style={styles.headTxtStyle}>NUMBER RACHUNKU</Text>
          <Text style={styles.valueTxtStyle}>
            62 1020 5561 0000 3202 0030 1895
          </Text>
          <Text style={styles.headTxtStyle}>NAZWA RACHUNKU</Text>
          <Text style={styles.valueTxtStyle}>PKO KONTO BEZ GRANIC</Text>
          <Text style={styles.headTxtStyle}>SALDO DOSTEPNE</Text>
          <Text style={styles.valueTxtStyle}>5 700,00 PLN</Text>
          <Text style={styles.headTxtStyle}>SALDO KSEIGOWE</Text>
          <Text style={styles.valueTxtStyle}>1 500,70 PLN</Text>
          <Text style={styles.headTxtStyle}>OPROCENTOWANIE RACHUNKU</Text>
          <Text style={styles.valueTxtStyle}>0,01 %</Text>
          <Text style={styles.headTxtStyle}>DATA OTWARCIA</Text>
          <Text style={styles.valueTxtStyle}>21.08.2013</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.headTxtStyle}>AUTOMATYCZNE OSZCZEDZANIE</Text>
            <Text style={styles.numberTxtStyle1}>Change</Text>
          </View>
          <Text style={[styles.valueTxtStyle, {marginBottom: 0}]}>
            Wlaczone
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
            62 (...) 0030 1895{' '}
            <Text style={styles.numberTxtStyle1}> Copy the number</Text>
          </Text>
          <Text style={styles.availableFunds}>Available funds</Text>
          <Text style={styles.funds}>5 700,00 PLN</Text>
          <View style={styles.rowContainer1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.swiperButtonContainer}
              //   onPress={() => navigation.navigate('Transfer')}
            >
              <Text style={styles.swiperButtonTag}>Transfer</Text>
            </TouchableOpacity>
            <View style={{width: '45%'}}>
              <Text style={styles.balanceTxtStyle}>Blocked balance ></Text>
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
