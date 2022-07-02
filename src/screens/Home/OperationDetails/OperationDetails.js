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
    setDetails(route?.params?.details[0]);
  }, [route]);

  const RenderDetails = () => {
    return (
      <View>
        <View style={{padding: 20}}>
          <Text style={styles.headTxtStyle}>TRANSAKCJA</Text>
          <Text style={styles.valueTxtStyle}>{details?.trans}</Text>
          <Text style={styles.headTxtStyle}>Opis</Text>
          <Text style={styles.valueTxtStyle}>{details?.opis}</Text>
          <Text style={styles.headTxtStyle}>Nazwa nadawcy</Text>
          <Text style={styles.valueTxtStyle}>{details?.nazwa}</Text>
          <Text style={styles.headTxtStyle}>Nr rachunku przeciwstawnego</Text>
          <Text style={styles.valueTxtStyle}>{details?.nr_rachunku}</Text>
          <Text style={styles.headTxtStyle}>Od</Text>
          <Text style={styles.valueTxtStyle}>{details?.od}</Text>
          <Text style={styles.headTxtStyle}>Do</Text>
          <Text style={styles.valueTxtStyle}>{details?.do}</Text>
          <Text style={styles.headTxtStyle}>Adres nadawcy</Text>
          <Text style={styles.valueTxtStyle}>{details?.adres}</Text>
          <Text style={styles.headTxtStyle}>SALDO PO OPERACJI</Text>
          <Text style={styles.valueTxtStyle}>{details?.saldo}</Text>
          <Text style={styles.headTxtStyle}>TYP TRANSAKCJI</Text>
          <Text style={styles.valueTxtStyle}>{details?.trans}</Text>
          <Text style={styles.headTxtStyle}>DARA VALUTY</Text>
          <Text style={styles.valueTxtStyle}>{details?.dara}</Text>
          <Text style={styles.headTxtStyle}>Numer referencyjny</Text>
          <Text style={styles.valueTxtStyle}>{details?.numer}</Text>
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
          style={styles.menuContainer}
        >
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
      {details === undefined || details === null || details?.length === 0 ? (
        <View style={styles.noDetailsView}>
          <Text style={styles.noDetailsTxtStyle}>No details found</Text>
        </View>
      ) : (
        <>
          <View style={styles.detailsContainer}>
            <Text style={styles.bankTxtStyle}>PKO KONTO BEZ GRANIC</Text>
            <Text style={styles.numberTxtStyle}>{details?.pko}</Text>
          </View>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{padding: 20, paddingTop: 0, backgroundColor: 'white'}}
            >
              <Text style={styles.availableFunds}>KWOTA</Text>
              <Text style={styles.funds}>{details?.kwota}</Text>
              <Text style={styles.availableFunds}>DETA OPERACJI</Text>
              <Text style={styles.numberTxtStyle}>{details?.deta}</Text>
            </View>
            <RenderDetails />
          </KeyboardAwareScrollView>
          <View style={{height: '14%', backgroundColor: 'white'}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.middleButton}>
              <Text style={styles.middleButtonTag1}>
                Return via mobile transfer
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default OperationDetails;
