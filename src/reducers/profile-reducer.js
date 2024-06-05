import { v4 as uuidv4 } from 'uuid';

// const JSONStorage = JSON.parse(localStorage.getItem('STATE'));

// export const initialProfileState = JSONStorage ?? {
//   accessToken: '',
// };

export const initialProfileState = {
  accessToken: '',
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};
