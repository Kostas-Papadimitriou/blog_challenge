import axios from "axios";

const POSTS_URL = "http://localhost:8080/rest/posts";

const PostService = {
  getAllPosts: () => axios.get(POSTS_URL).then((response) => response.data),
  getPostById: (postId) =>
    axios.get(`${POSTS_URL}/${postId}`).then((response) => response.data),
  savePost: (post) => axios.post(POSTS_URL, post),
  updatePost: (postId, post) => axios.put(`${POSTS_URL}/${postId}`, post),
  deletePost: (postId) => axios.delete(`${POSTS_URL}/${postId}`),
};

export default PostService;
