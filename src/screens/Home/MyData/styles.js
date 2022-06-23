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
  missingDataView: {
    padding: 20,
    backgroundColor: 'red',
  },
  missingTxtStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily: Theme.fontFamily.bold,
  },
  descTxtStyle: {
    fontSize: 14,
    marginTop: 10,
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
  },
  viewContainer: {
    backgroundColor: 'white',
  },
  titleTxtStyle: {
    color: 'gray',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
  },
  valTxtStyle: {
    marginTop: 3,
    color: 'black',
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.regular,
  },
  lineView: {
    height: 1,
    width: '100%',
    marginTop: 0,
    backgroundColor: 'lightgray',
  },
  rowContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
