import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  menuContainer: {
    position: 'absolute',
    top: moderateScale(-15),
    right: moderateScale(35),
  },
  optionTxtStyle: {
    color: 'black',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
    paddingVertical: moderateScale(10),
    paddingLeft: moderateScale(10),
  },
  titleTxtStyle: {
    color: 'gray',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
  },
  tabsContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  tabContainer: selectedTab => {
    return {
      width: '48%',
      borderRadius: 3,
      paddingVertical: 12,
      alignItems: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'center',
      backgroundColor: selectedTab ? '#043570' : 'white',
    };
  },
  tabContainer1: selectedTab => {
    return {
      width: '48%',
      borderRadius: 3,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
      boderTopRightRadius: 5,
      boderBottomRightRadius: 5,
      backgroundColor: selectedTab ? '#043570' : 'white',
    };
  },
  btntxtStyle: selectedTab => {
    return {
      fontSize: moderateScale(14),
      fontFamily: Theme.fontFamily.regular,
      color: selectedTab ? 'white' : 'black',
    };
  },
  rowContainer: {
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 60,
  },
  txtStyle: {
    color: 'black',
    paddingRight: 5,
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
  },
  descTxtStyle: {
    marginTop: 5,
    color: 'gray',
    paddingRight: 5,
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.regular,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '84%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  inputStyle: {
    paddingRight: 5,
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
  },
  iconContainer: {
    padding: 10,
    marginTop: 5,
    paddingHorizontal: 13,
    marginLeft: 15,
    borderRadius: 5,
    backgroundColor: '#043570',
  },
});

export default styles;
