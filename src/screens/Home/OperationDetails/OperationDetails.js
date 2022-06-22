import React, {useState, useEffect} from 'react';
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
import {moderateScale} from '../../../Theme/Dimensions';

const OperationDetails = ({navigation}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  const RenderDetails = () => {
    return (
      <View>
        <View style={{padding: 20}}>
          <Text style={styles.headTxtStyle}>TRANSAKCJA</Text>
          <Text style={styles.valueTxtStyle}>
            PERZELEW PRZYCHODZACY NA NR TEL.
          </Text>
          <Text style={styles.headTxtStyle}>Opis</Text>
          <Text style={styles.valueTxtStyle}>ZWROT ZA OBIAD</Text>
          <Text style={styles.headTxtStyle}>Nazwa nadawcy</Text>
          <Text style={styles.valueTxtStyle}>JACK IKO</Text>
          <Text style={styles.headTxtStyle}>Nr rachunku przeciwstawnego</Text>
          <Text style={styles.valueTxtStyle}>
            74 1020 5561 0000 3902 0294 1482
          </Text>
          <Text style={styles.headTxtStyle}>Od</Text>
          <Text style={styles.valueTxtStyle}>48501500500</Text>
          <Text style={styles.headTxtStyle}>Do</Text>
          <Text style={styles.valueTxtStyle}>601500500</Text>
          <Text style={styles.headTxtStyle}>Adres nadawcy</Text>
          <Text style={styles.valueTxtStyle}>02-515 WARSZAWA</Text>
          <Text style={styles.headTxtStyle}>SALDO PO OPERACJI</Text>
          <Text style={styles.valueTxtStyle}>3 310,67 PLN</Text>
          <Text style={styles.headTxtStyle}>TYP TRANSAKCJI</Text>
          <Text style={styles.valueTxtStyle}>Przelewy zewnetrzne</Text>
          <Text style={styles.headTxtStyle}>DARA VALUTY</Text>
          <Text style={styles.valueTxtStyle}>14.02.2015</Text>
          <Text style={styles.headTxtStyle}>Numer referencyjny</Text>
          <Text style={styles.valueTxtStyle}>137153333233</Text>
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

      <View style={{paddingTop: 20, paddingLeft: 20, backgroundColor: 'white'}}>
        <Text style={styles.bankTxtStyle}>PKO KONTO BEZ GRANIC</Text>
        <Text style={styles.numberTxtStyle}>62 (...) 0030 1895</Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 20, paddingTop: 0, backgroundColor: 'white'}}>
          <Text style={styles.availableFunds}>KWOTA</Text>
          <Text style={styles.funds}>10,00 PLN</Text>
          <Text style={styles.availableFunds}>DETA OPERACJI</Text>
          <Text style={styles.numberTxtStyle}>14.02.2015</Text>
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
    </SafeAreaView>
  );
};

export default OperationDetails;
