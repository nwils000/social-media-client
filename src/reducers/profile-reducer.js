import { v4 as uuidv4 } from 'uuid';

const JSONStorage = JSON.parse(localStorage.getItem('STATE'));

export const initialProfileState = JSONStorage ?? {
  accessToken: '',
  profile: {},
  following: [],
  profileImSeeing: [],
  postLookingAt: [],
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      localStorage.setItem(
        'STATE',
        JSON.stringify({ ...state, accessToken: action.accessToken })
      );
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case 'SET_PROFILE':
      localStorage.setItem(
        'STATE',
        JSON.stringify({ ...state, profile: action.profile })
      );
      return {
        ...state,
        profile: action.profile,
      };
    case 'SET_PROFILE_IM_SEEING':
      localStorage.setItem(
        'STATE',
        JSON.stringify({ ...state, profileImSeeing: action.theProfile })
      );
      return {
        ...state,
        profileImSeeing: action.theProfile,
      };
    case 'SET_POST_LOOKING_AT':
      localStorage.setItem(
        'STATE',
        JSON.stringify({ ...state, postLookingAt: action.postLookingAt })
      );
      return {
        ...state,
        postLookingAt: action.postLookingAt,
      };
    case 'SET_FOLLOWING':
      localStorage.setItem(
        'STATE',
        JSON.stringify({ ...state, following: action.following })
      );
      return {
        ...state,
        following: action.following,
      };
    case 'LOGOUT':
      localStorage.removeItem('STATE');
    default:
      return state;
  }
};
