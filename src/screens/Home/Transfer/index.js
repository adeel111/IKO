import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AppBackHeader from '../../../components/AppBackHeader';
import AppStatusBar from '../../../components/AppStatusBar';
import AppButton from '../../../components/AppButton';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import {moderateScale} from '../../../Theme/Dimensions';
import AppInput from '../../../components/AppInput';

const Transfer = ({navigation}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [selectedTab, setSelectedTab] = useState(true);
  const [selectedType, setSelectedType] = useState(true);

  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => navigation.getParent()?.setOptions({tabBarStyle: undefined});
  }, []);

  const StandardTransfer = ({}) => {
    return (
      <View style={{flex: 1, padding: 15}}>
        <Text style={styles.titleTxtStyle}>Select transfer</Text>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer(selectedTab)}
            onPress={() => setSelectedTab(true)}
          >
            <Text style={styles.btntxtStyle(selectedTab)}>
              Standard transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer1(!selectedTab)}
            onPress={() => setSelectedTab(false)}
          >
            <Text style={styles.btntxtStyle(!selectedTab)}>Own transfer</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleTxtStyle}>From account</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.txtStyle}>
              PKO KONTO BEZ GRANIC (5700,00 PLN)
            </Text>
            <Text style={styles.descTxtStyle}>62 (...) 0030 1895</Text>
          </View>
          <AntDesign
            name="right"
            color={'#043573'}
            size={moderateScale(18)}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>Beneficiary</Text>
        <View style={styles.inputView}>
          <AppInput
            width="84%"
            placeholder="Enter the name or choose from list"
          />
          <View style={styles.iconContainer}>
            <Octicons name="person" color={'white'} size={moderateScale(20)} />
          </View>
        </View>
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Beneficiary's account number
        </Text>
        <AppInput placeholder="" />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Address (optional)
        </Text>
        <AppInput placeholder="" />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>Title</Text>
        <AppInput placeholder="" />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>Account</Text>
        <AppInput placeholder="" />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Transfer date
        </Text>
        <AppInput placeholder="12.06.2022" editable={false} rightIcon={true} />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Select transfer
        </Text>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer(selectedType)}
            onPress={() => setSelectedType(true)}
          >
            <Text style={styles.btntxtStyle(selectedType)}>Standard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer1(!selectedType)}
            onPress={() => setSelectedType(false)}
          >
            <Text style={styles.btntxtStyle(!selectedType)}>Intent</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.titleTxtStyle, {marginTop: 10}]}>
          The racipient will get your money transfer{'\n'}immediately.
        </Text>
        <AppButton
          width="100%"
          lable="Send"
          bgColor="lightgray"
          textColor="gray"
        />
      </View>
    );
  };

  const OwnTransfer = ({}) => {
    return (
      <View style={{flex: 1, padding: 15}}>
        <Text style={styles.titleTxtStyle}>Select transfer</Text>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer(selectedTab)}
            onPress={() => setSelectedTab(true)}
          >
            <Text style={styles.btntxtStyle(selectedTab)}>
              Standard transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.tabContainer1(!selectedTab)}
            onPress={() => setSelectedTab(false)}
          >
            <Text style={styles.btntxtStyle(!selectedTab)}>Own transfer</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleTxtStyle}>Transfer from</Text>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.txtStyle}>
              PKO KONTO BEZ GRANIC (5700,00 PLN)
            </Text>
            <Text style={styles.descTxtStyle}>62 (...) 0030 1895</Text>
          </View>
          <AntDesign
            name="right"
            color={'#043573'}
            size={moderateScale(18)}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>To</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.txtStyle}>Select an account</Text>
          <AntDesign
            name="right"
            color={'#043573'}
            size={moderateScale(18)}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Transfer title
        </Text>
        <AppInput placeholder="" />
        <Text style={[styles.titleTxtStyle, {marginTop: 15}]}>
          Amount (PLN)
        </Text>
        <AppInput placeholder="" />
        <AppButton
          width="100%"
          lable="Send"
          bgColor="lightgray"
          textColor="gray"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} forceInset={{top: 'never'}}>
      <AppStatusBar />
      <AppBackHeader
        title={'Transfer'}
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
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                setMenuOpened(false);
              }}
            >
              <Text style={styles.optionTxtStyle}>Scan and transfer</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {selectedTab ? <StandardTransfer /> : <OwnTransfer />}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Transfer;
