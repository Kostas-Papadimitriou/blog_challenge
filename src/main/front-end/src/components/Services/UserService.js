import axios from "axios";

const USERS_URL = "http://localhost:8080/rest/users";

const UserService = {
  getAllUsers: () => axios.get(USERS_URL).then((response) => response.data),
  getUserById: (userId) =>
    axios.get(`${USERS_URL}/${userId}`).then((response) => response.data),
  savePost: (user) => axios.post(USERS_URL, user),
  updatePost: (userId, user) => axios.put(`${USERS_URL}/${userId}`, user),
  deletePost: (userId) => axios.delete(`${USERS_URL}/${userId}`),
};

export default UserService;
