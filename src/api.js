import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

export const getToken = async ({ auth, username, password }) => {
  try {
    const response = await axios.post(`${baseUrl}/token/`, {
      username: username,
      password: password,
    });
    console.log('RESPONSE: ', response);
    const accessToken = response.data.access;
    auth.dispatch({
      type: 'SET_ACCESS_TOKEN',
      accessToken: accessToken,
    });
    console.log('access', auth.state.accessToken);
    return accessToken;
  } catch (error) {
    console.log('Error with getToken api call: ', error);
    auth.dispatch({
      type: 'SET_ACCESS_TOKEN',
      accessToken: undefined,
    });
  }
};

export const fetchUser = async ({ accessToken }) => {
  try {
    console.log('access', accessToken);
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/profile/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('PROFILE: ', response);
  } catch (error) {
    console.log('Error with fetchUser api call: ', error);
    auth.dispatch({
      type: 'SET_ACCESS_TOKEN',
      accessToken: undefined,
    });
  }
};

export const createUser = async ({
  username,
  password,
  firstName,
  lastName,
}) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/create-user/`,
      data: {
        username,
        password: password,
        first_name: firstName,
        last_name: lastName,
      },
    });
    console.log('CREATE USER: ', response);
  } catch (error) {
    console.log('Error with createUser api call: ', error);
  }
};

export const createPost = async ({ auth, image, description }) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/create-post/`,
      headers: {
        Authorization: `Bearer ${auth.state.accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: {
        image,
        description,
      },
    });
    console.log('CREATED POST: ', response);
  } catch (error) {
    console.log('Error with createPost api call: ', error);
  }
};

export const getFollowingPosts = async ({ auth }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/get-following-posts/`,
      headers: {
        Authorization: `Bearer ${auth.state.accessToken}`,
      },
    });
    console.log('following posts', response);
  } catch (error) {
    console.log('Error with getFollowingPosts api call: ', error);
  }
};
