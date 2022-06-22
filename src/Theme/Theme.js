import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: '#26BC50',
    secondaryColor: '#0F86CB',
    bluePColor: '#094994',
    yellowPColor: '#fcbd17',
    textColor: '#40405A',
    whiteColor: '#ffffff',
    blackColor: '#070202',
    redColor: '#A72E31',
    lightRedColor: '#E84B27',
    grayColor: '#676767',
    lightGrayColor: '#A1A0A0',
    startGColor: '#FFF200',
    endGColor: '#FCBD17',
  },
  fontFamily: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semi: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
    Montserrat_RegularItalic: 'Montserrat-RegularItalic',
    Montserrat_MediumItalic: 'Montserrat-MediumItalic',
    Montserrat_SemiBoldItalic: 'Montserrat-SemiBoldItalic',
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
