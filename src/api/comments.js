import axios from 'axios';

const getComments = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments`);
  return response.data;
};
const addComment = async (newComment) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, newComment);
};
const deleteComment = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`);
};
const updateComment = async ({ id, updatedComment }) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`, updatedComment);
};

export { getComments, addComment, deleteComment, updateComment };
