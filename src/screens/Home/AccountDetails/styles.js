import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerTextView: {
    height: moderateScale(45),
    justifyContent: 'center',
  },
  secitonListHeader: {
    paddingLeft: (width / 100) * 5,
    color: 'black',
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(14),
  },
  menuStyle: {
    width: '62%',
    alignSelf: 'flex-end',
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
  txtContainer: {
    width: '32%',
    marginTop: 25,
    borderRadius: 3,
    backgroundColor: 'lightgray',
  },
  txtStyle: {
    fontSize: 12,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  bankTxtStyle: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: Theme.fontFamily.medium,
  },
  numberTxtStyle: {
    fontSize: 15,
    marginTop: 3,
    fontFamily: Theme.fontFamily.regular,
  },
  numberTxtStyle1: {
    fontSize: 13,
    marginTop: 3,
    color: '#043570',
  },
  availableFunds: {
    marginTop: moderateScale(20),
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(12),
    color: '#888888',
  },
  funds: {
    color: 'black',
    fontFamily: Theme.fontFamily.medium,
    fontSize: moderateScale(18),
  },
  rowContainer1: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  swiperButtonContainer: {
    height: moderateScale(50),
    width: '49%',
    backgroundColor: '#043570',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
  },
  swiperButtonTag: {
    color: 'white',
    marginLeft: moderateScale(10),
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(15),
  },
  balanceTxtStyle: {
    fontFamily: Theme.fontFamily.regular,
    fontSize: moderateScale(15),
    color: '#043570',
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabContainer1: isSelected => {
    return {
      width: '50%',
      paddingVertical: 15,
      textAlign: 'center',
      alignItems: 'center',
      borderBottomWidth: isSelected ? 1.5 : 0,
      justifyContent: 'center',
      borderBottomColor: '#043570',
    };
  },
  tabTxtStyle: {
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.medium,
  },
  flistContainer: {
    backgroundColor: 'white',
    paddingVertical: moderateScale(15),
  },
  buttonWrapper: {
    width: moderateScale(110),
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(10),
  },
  circle: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D49',
  },
  buttonTag: {
    color: 'black',
    textAlign: 'center',
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    fontFamily: Theme.fontFamily.regular,
  },
  rowContainer: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childItemContainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
    paddingVertical: moderateScale(15),
    paddingHorizontal: (width / 100) * 5,
    backgroundColor: 'white',
  },
  titleTxtStyle: {
    fontSize: moderateScale(13),
    fontFamily: Theme.fontFamily.regular,
    color: 'black',
  },
  descTxtStyle: {
    color: '#9E9E9E',
    fontSize: moderateScale(13),
    fontFamily: Theme.fontFamily.regular,
  },
  tabsContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  tabContainer: selectedTab => {
    return {
      width: '48%',
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 12,
      borderColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selectedTab ? 'lightgray' : 'white',
    };
  },
  btntxtStyle: {
    color: 'black',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
  },
  headTxtStyle: {
    fontSize: 13,
    paddingVertical: 3,
    fontFamily: Theme.fontFamily.regular,
  },
  valueTxtStyle: {
    fontSize: 14,
    marginBottom: 15,
    fontFamily: Theme.fontFamily.regular,
  },
});

export default styles;
