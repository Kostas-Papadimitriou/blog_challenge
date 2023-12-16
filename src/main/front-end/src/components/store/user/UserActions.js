import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserType";
import UserService from "../../Services/UserService";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    UserService.getAllUsers().then((response) => {
      dispatch(fetchUserSuccess(response.data)).catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
    });
  };
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = () => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = () => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
