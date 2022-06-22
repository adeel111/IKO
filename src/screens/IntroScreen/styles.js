import {StyleSheet, Dimensions, Platform} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperContainer: {
    flex: 1,
    top: -1,
    backgroundColor: 'white',
  },
  topText: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    fontFamily: Theme.fontFamily.semi,
    marginTop: moderateScale(30),
    color: 'black',
  },
  secondText: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: Theme.fontFamily.regular,
    textAlign: 'center',
    width: (width / 100) * 80,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  boldText: {
    fontFamily: Theme.fontFamily.semi,
  },
  paginationButtonTag: {
    color: '#043573',
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.regular,
    width: moderateScale(50),
    height: moderateScale(50),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  unselected: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: moderateScale(5),
  },
  selected: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 100,
    backgroundColor: '#043573',
    marginHorizontal: moderateScale(5),
  },
  bottomButtonTag: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: Theme.fontFamily.medium,
  },
  bottomButton: {
    width: (width / 100) * 90,
    height: moderateScale(55),
    backgroundColor: '#043573',
    borderTopLeftRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: moderateScale(5),
    elevation: moderateScale(5),
    marginBottom: Platform.select({
      android: moderateScale(10),
      ios: moderateScale(30),
    }),
  },
});

export default styles;
