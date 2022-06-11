import * as types from '../actions/types';
import {AUTH_PENDING, AUTH_ERROR} from '../actions/auth';

const initialState = {
  quickAcess: [
    {
      no: 1,
      tag: 'Inbox',
      path: require('../../assets/images/alarm.png'),
      show: true,
    },
    {
      no: 2,
      tag: 'Offers',
      path: require('../../assets/images/shopping.png'),
      show: true,
    },
    {
      no: 3,
      tag: 'Bank branches and ATMs',
      path: require('../../assets/images/distance.png'),
      show: true,
    },
    {
      no: 4,
      tag: 'Exchange rates',
      path: require('../../assets/images/taxes.png'),
      show: true,
    },
    {
      no: 5,
      tag: 'Contact',
      path: require('../../assets/images/phone.png'),
      show: true,
    },
    {
      no: 6,
      tag: 'About IKO',
      path: require('../../assets/images/information.png'),
      show: true,
    },
    {
      no: 7,
      text: 'Add features',
    },
    {
      no: 8,
      tag: 'Temporary card lock',
      path: require('../../assets/images/cardlock.png'),
      show: false,
    },
    {
      no: 9,
      tag: 'BLIK vouchers',
      path: require('../../assets/images/blikVoucher.png'),
      show: false,
    },
    {
      no: 10,
      tag: 'Transport tickets',
      path: require('../../assets/images/transportTicket.png'),
      show: false,
    },
    {
      no: 11,
      tag: 'Parking fee',
      path: require('../../assets/images/parkingFee.png'),
      show: false,
    },
    {
      no: 12,
      tag: 'Currency exchange',
      path: require('../../assets/images/currencyExchange.png'),
      show: false,
    },
    {
      no: 13,
      tag: 'iPKO dealer',
      show: false,
    },
  ],
  call: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CALL_API:
      return {
        ...state,
        call: action.payload,
      };
    case types.STOP_API:
      return {
        ...state,
        call: '',
      };
    case types.SAVE_QUICK_ACCESS:
      return {
        ...state,
        quickAcess: action.payload,
      };
    case types.RESET_QUICK_ACCESS:
      return {
        ...state,
        quickAcess: [
          {
            no: 1,
            tag: 'Inbox',
            path: require('../../assets/images/alarm.png'),
            show: true,
          },
          {
            no: 2,
            tag: 'Offers',
            path: require('../../assets/images/shopping.png'),
            show: true,
          },
          {
            no: 3,
            tag: 'Bank branches and ATMs',
            path: require('../../assets/images/distance.png'),
            show: true,
          },
          {
            no: 4,
            tag: 'Exchange rates',
            path: require('../../assets/images/taxes.png'),
            show: true,
          },
          {
            no: 5,
            tag: 'Contact',
            path: require('../../assets/images/phone.png'),
            show: true,
          },
          {
            no: 6,
            tag: 'About IKO',
            path: require('../../assets/images/information.png'),
            show: true,
          },
          {
            no: 7,
            text: 'Add features',
          },
          {
            no: 8,
            tag: 'Temporary card lock',
            path: require('../../assets/images/cardlock.png'),
            show: false,
          },
          {
            no: 9,
            tag: 'BLIK vouchers',
            path: require('../../assets/images/blikVoucher.png'),
            show: false,
          },
          {
            no: 10,
            tag: 'Transport tickets',
            path: require('../../assets/images/transportTicket.png'),
            show: false,
          },
          {
            no: 11,
            tag: 'Parking fee',
            path: require('../../assets/images/parkingFee.png'),
            show: false,
          },
          {
            no: 12,
            tag: 'Currency exchange',
            path: require('../../assets/images/currencyExchange.png'),
            show: false,
          },
          {
            no: 13,
            tag: 'iPKO dealer',
            show: false,
          },
        ],
      };
    default:
      return state;
  }
};
