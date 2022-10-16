import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './styles';

const OperationDetails = ({navigation, route}) => {
  const [details, setDetails] = useState([]);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  useLayoutEffect(() => {
    setDetails(route?.params?.details);
  }, [route]);

  const RenderDetails = () => {
    return (
      <View>
        <View style={{padding: 20}}>
          <Text style={styles.headTxtStyle}>Transaction</Text>
          <Text style={styles.valueTxtStyle}>{details?.trans}</Text>
          <Text style={styles.headTxtStyle}>Description</Text>
          <Text style={styles.valueTxtStyle}>{details?.opis}</Text>
          <Text style={styles.headTxtStyle}>Sender name</Text>
          <Text style={styles.valueTxtStyle}>{details?.nazwa}</Text>
          <Text style={styles.headTxtStyle}>Other party account number</Text>
          <Text style={styles.valueTxtStyle}>{details?.nr_rachunku}</Text>
          {/* <Text style={styles.headTxtStyle}>From</Text>
          <Text style={styles.valueTxtStyle}>{details?.od}</Text>
          <Text style={styles.headTxtStyle}>To</Text>
          <Text style={styles.valueTxtStyle}>{details?.do}</Text>
          <Text style={styles.headTxtStyle}>Sender address</Text>
          <Text style={styles.valueTxtStyle}>{details?.adres}</Text> */}
          <Text style={styles.headTxtStyle}>Balance after operation</Text>
          <Text style={styles.valueTxtStyle}>{details?.saldo}</Text>
          <Text style={styles.headTxtStyle}>Transaction Type</Text>
          <Text style={styles.valueTxtStyle}>{details?.trans}</Text>
          <Text style={styles.headTxtStyle}>Value date</Text>
          <Text style={styles.valueTxtStyle}>{details?.dara}</Text>
          {/* <Text style={styles.headTxtStyle}>Reference Number</Text>
          <Text style={styles.valueTxtStyle}>{details?.numer}</Text> */}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader
        title={'Operation details'}
        isBackIcon
        onPress={() => setMenuOpened(true)}
      />
      <View style={{alignItems: 'flex-end'}}>
        <Menu
          onBackdropPress={() => setMenuOpened(false)}
          opened={menuOpened}
          style={styles.menuContainer}>
          <MenuTrigger text="" />
          <MenuOptions optionsContainerStyle={styles.menuStyle}>
            <MenuOption onSelect={() => setMenuOpened(false)}>
              <Text style={styles.optionTxtStyle}>
                Show operation confirmation
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.bankTxtStyle}>PKO KONTO ZA ZERO</Text>
        <Text style={styles.numberTxtStyle}>
          {details?.pko?.replace(/ /g, '')?.slice(0, 2)} (...){' '}
          {details?.pko
            ?.replace(/ /g, '')
            ?.slice(-8)
            ?.replace(/\d{4,4}?(?=...)/g, '$& ')}
        </Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20, paddingTop: 0, backgroundColor: 'white'}}>
          <Text style={styles.availableFunds}>Amount</Text>
          <Text style={styles.funds}>{details?.amount}</Text>
          <Text style={styles.availableFunds}>Operation date</Text>
          <Text style={styles.numberTxtStyle}>{details?.date}</Text>
        </View>
        <RenderDetails />
      </KeyboardAwareScrollView>
      <View style={{height: '14%'}}>
        <TouchableOpacity activeOpacity={0.7} style={styles.middleButton}>
          <Text style={styles.middleButtonTag1}>
            Return via mobile transfer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OperationDetails;
