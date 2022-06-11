import * as types from '../actions/types';

export const activeScreen = params => ({
  type: types.ACTIVE_SCREEN,
  payload: params,
});

export const getNews = (currentPage, onSuccessNews, onErrorNews) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/news?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessNews(res.data);
      }
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const getInitiatives = (
  currentPage,
  onSuccessInitiatives,
  onErrorInitiatives,
) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/initative?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessInitiatives(res.data);
      }
    } catch (err) {
      onErrorInitiatives(err);
    }
  };
};

export const getTeamData = (currentPage, onSuccessTeam, onErrorTeam) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/ourteam?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessTeam(res.data);
      }
    } catch (err) {
      onErrorTeam(err);
    }
  };
};

export const getLeadership = (
  currentPage,
  onSuccessLeadership,
  onErrorleadership,
) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/leadership?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessLeadership(res.data);
      }
    } catch (err) {
      onErrorleadership(err);
    }
  };
};

export const getTweets = (currentPage, onSuccessTweets, onErrorTweets) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/tweets?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessTweets(res.data);
      }
    } catch (err) {
      onErrorTweets(err);
    }
  };
};

export const getSocial = (currentPage, onSuccessSocial, onErrorSocial) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/socialmedia?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessSocial(res.data);
      }
    } catch (err) {
      onErrorSocial(err);
    }
  };
};

export const getGallery = (currentPage, onSuccessGallery, onErrorGallery) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/gallery?page=${currentPage}`,
        headers: {
          Accept: 'application/json',
        },
      };
      let res = await axios(config);
      if (res) {
        onSuccessGallery(res.data);
      }
    } catch (err) {
      onErrorGallery(err);
    }
  };
};

export const becomeMember = (
  params,
  onSuccessMemberShip,
  onErrorMemberShip,
) => {
  return async dispatch => {
    try {
      var FormData = require('form-data');
      var data = new FormData();
      data.append('name', params.name);
      data.append('father_name', params.father_name);
      data.append('cnic', params.cnic);
      data.append('contact', params.contact);
      data.append('email', params.email);
      data.append('country', params.country);
      data.append('province', params.province);
      data.append('city', params.city);
      data.append('uc', params.uc);
      data.append('address', params.address);
      data.append('role_in_pti', params.role_in_pti);
      data.append('image', {
        uri: params.image.uri,
        name: params.image.name,
        type: params.image.type,
      });

      let res = await fetch(
        'https://techndevs.net/ptiofficial/public/api/membership/store',
        {
          method: 'POST', // or 'PUT'
          headers: {
            Accept: 'application/json',
          },
          body: data,
        },
      );
      if (res) {
        onSuccessMemberShip(res);
      }
    } catch (err) {
      onErrorMemberShip(err);
    }
  };
};

export const getCountries = (onSuccessCountries, onErrorCountries) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: 'https://techndevs.net/ptiofficial/public/api/country',
        headers: {
          Accept: 'application/json',
        },
      };

      let res = await axios(config);
      if (res) {
        onSuccessCountries(res.data.data);
      }
    } catch (err) {
      onErrorCountries(err);
    }
  };
};

export const getCities = (country, onSuccessCities, onErrorCities) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/city/${country}`,
        headers: {
          Accept: 'application/json',
        },
      };

      let res = await axios(config);
      if (res) {
        onSuccessCities(res.data.data);
      }
    } catch (err) {
      onErrorCities(err);
    }
  };
};

export const getDesignation = (
  onSuccesDesignation,
  onErrorDesignation,
  country,
  city,
) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/designation/country/${country}/city/${city}`,
        headers: {
          Accept: 'application/json',
        },
      };

      let res = await axios(config);
      if (res) {
        onSuccesDesignation(res.data.data);
      }
    } catch (err) {
      onErrorDesignation(err);
    }
  };
};

export const getDesignationMembers = (id, onSuccesMembers, onErrorMembers) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/designationmember/${id}`,
        headers: {
          Accept: 'application/json',
        },
      };

      let res = await axios(config);
      if (res) {
        onSuccesMembers(res.data.data);
      }
    } catch (err) {
      onErrorMembers(err);
    }
  };
};

export const getNotification = (
  currentPage,
  onSuccessNotification,
  onErrorNotification,
) => {
  return async dispatch => {
    try {
      var config = {
        method: 'get',
        url: `https://techndevs.net/ptiofficial/public/api/notifications?page=${currentPage}`,
        headers: {},
      };

      let res = await axios(config);
      if (res) {
        onSuccessNotification(res.data);
      }
    } catch (err) {
      onErrorNotification(err);
    }
  };
};
