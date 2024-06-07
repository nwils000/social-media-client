import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://app-social-media.fly.dev';

export const getToken = async ({ profile, username, password }) => {
  try {
    const response = await axios.post(`${baseUrl}/token/`, {
      username: username,
      password: password,
    });
    console.log('Token Response: ', response);
    const accessToken = response.data.access;
    profile.dispatch({
      type: 'SET_ACCESS_TOKEN',
      accessToken: accessToken,
    });
    return accessToken;
  } catch (error) {
    console.log('Error with getToken api call: ', error);
    profile.dispatch({
      type: 'SET_ACCESS_TOKEN',
      accessToken: undefined,
    });
  }
};

export const fetchUser = async ({ accessToken, profile }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/profile/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('PROFILE: ', response);
    profile.dispatch({
      type: 'SET_PROFILE',
      profile: response.data,
    });
    profile.dispatch({
      type: 'SET_PROFILE_IM_SEEING',
      theProfile: response.data,
    });
  } catch (error) {
    console.log('Error with fetchUser api call: ', error);
    profile.dispatch({
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

export const createPost = async ({ profile, image, description }) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/create-post/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: {
        image,
        description,
      },
    });
    const accessToken = profile.state.accessToken;
    console.log('CREATED POST: ', response);
    fetchUser({ accessToken, profile });
  } catch (error) {
    console.log('Error with createPost api call: ', error);
  }
};

export const getFollowingPosts = async ({ profile }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/get-following-posts/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
    });
    console.log('following posts', response);
    profile.dispatch({
      type: 'SET_FOLLOWING',
      accessToken: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with getFollowingPosts api call: ', error);
  }
};

export const addLikeToPost = async ({ profile, postId }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/add-like-to-post/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        post_id: postId,
      },
    });
    profile.dispatch({
      type: 'SET_FOLLOWING',
      accessToken: response.data,
    });
    profile.dispatch({
      type: 'SET_PROFILE',
      profile: profile.state.profile,
    });
    return response.data;
  } catch (error) {
    console.log('Error with addLikeToPost api call: ', error);
  }
};

export const addCommentToPost = async ({ profile, postId, comment }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/add-comment-to-post/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        post_id: postId,
        comment,
      },
    });
    profile.dispatch({
      type: 'SET_FOLLOWING',
      accessToken: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with addCommentToPost api call: ', error);
  }
};

export const getProfileToSee = async ({ profile, profileId }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/get-profile-to-see/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      params: {
        profile_id: profileId,
      },
    });
    profile.dispatch({
      type: 'SET_PROFILE_IM_SEEING',
      theProfile: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with getProfileToSee api call: ', error);
  }
};

export const updateProfile = async ({ profile, image, bio }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/update-profile/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: {
        image,
        bio,
      },
    });
    profile.dispatch({
      type: 'SET_PROFILE',
      profile: response.data,
    });
    profile.dispatch({
      type: 'SET_PROFILE_IM_SEEING',
      theProfile: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with updateProfile api call: ', error);
  }
};

export const updatePost = async ({ profile, description, postId }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/update-post/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        description,
        post_id: postId,
      },
    });
    profile.dispatch({
      type: 'SET_POST_LOOKING_AT',
      postLookingAt: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with updatePost api call: ', error);
  }
};
export const deletePost = async ({ profile, postId }) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `${baseUrl}/delete-post/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        post_id: postId,
      },
    });
    profile.dispatch({
      type: 'SET_PROFILE',
      profile: response.data,
    });
    profile.dispatch({
      type: 'SET_PROFILE_IM_SEEING',
      theProfile: response.data,
    });
    return response.data;
  } catch (error) {
    console.log('Error with deletePost api call: ', error);
  }
};

export const getAllProfiles = async ({ profile }) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/get-all-profiles/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error with getAllProfiles api call: ', error);
  }
};

export const followUser = async ({ profile, userIdToFollow }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/follow-user/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        user_id: userIdToFollow,
      },
    });
    console.log('Follow User Response: ', response);
    profile.dispatch({
      type: 'UPDATE_FOLLOWING_STATUS',
      following: true,
      userId: userIdToFollow,
    });
    return response.data;
  } catch (error) {
    console.log('Error with followUser api call: ', error);
  }
};

export const unfollowUser = async ({ profile, userIdToUnfollow }) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/unfollow-user/`,
      headers: {
        Authorization: `Bearer ${profile.state.accessToken}`,
      },
      data: {
        user_id: userIdToUnfollow,
      },
    });
    console.log('Unfollow User Response: ', response);
    profile.dispatch({
      type: 'UPDATE_FOLLOWING_STATUS',
      following: false,
      userId: userIdToUnfollow,
    });
    return response.data;
  } catch (error) {
    console.log('Error with unfollowUser api call: ', error);
  }
};
