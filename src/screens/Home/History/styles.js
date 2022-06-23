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
});

export default styles;
