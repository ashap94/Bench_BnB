import * as APISessionUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = userForm => dispatch =>
  APISessionUtil.signup(userForm).then(
    userData => dispatch(receiveCurrentUser(userData)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = userForm => dispatch =>
  APISessionUtil.login(userForm).then(
    userData => dispatch(receiveCurrentUser(userData)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  APISessionUtil.logout().then(
    userData => dispatch(logoutCurrentUser()),
    err => dispatch(receiveErrors(err.responseJSON))
  );
