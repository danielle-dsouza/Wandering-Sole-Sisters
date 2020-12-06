import * as actions from "../actions/actionTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SIGNIN_SUCCESS:
      console.log("User is signed in");
      return {
        ...state,
        authError: null,
      };

    case actions.SIGNIN_ERR:
      console.log("Sign in error");
      return {
        ...state,
        authError: action.err.message,
      };

    case actions.SIGNOUT:
      console.log("User is signed out");
      return state;

    case actions.SIGNUP_SUCCESS:
      console.log("Sign up success");
      return {
        ...state,
        authError: null,
      };

    case actions.SIGNUP_ERR:
      console.log("Sign up error");
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
