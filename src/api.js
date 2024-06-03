import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

export const getToken = ({ auth, username, password }) => {
  axios
    .post(`${baseUrl}/token/`, {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log('RESPONSE: ', response);
      auth.dispatch({
        type: 'SET_ACCESS_TOKEN',
        accessToken: response.data.access,
      });
    })
    .catch((error) => {
      console.log('ERROR: ', error);
      auth.dispatch({
        type: 'SET_ACCESS_TOKEN',
        accessToken: undefined,
      });
    });
};

export const fetchUser = ({ auth }) => {
  axios({
    method: 'get',
    url: `${baseUrl}/profile/`,
    headers: {
      Authorization: `Bearer ${auth.state.accessToken}`,
    },
  })
    .then((response) => {
      console.log('PROFILE: ', response);
    })
    .catch((error) => {
      console.log('ERROR: ', error);
      auth.dispatch({
        type: 'SET_ACCESS_TOKEN',
        accessToken: undefined,
      });
    });
};

export const createUser = ({ username, password, firstName, lastName }) => {
  axios({
    method: 'post',
    url: `${baseUrl}/create-user/`,
    data: {
      username,
      password: password,
      first_name: firstName,
      last_name: lastName,
    },
  })
    .then((response) => {
      console.log('CREATE USER: ', response);
    })
    .catch((error) => {
      console.log('ERROR: ', error);
    });
};
