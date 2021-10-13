import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../_actions/user_action";

export default function user(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    default: return state;
  }
}