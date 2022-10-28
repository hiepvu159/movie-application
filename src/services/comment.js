import axios from "axios";
const url = "http://192.168.69.102:8000/api";

export const addComments = async (comment, movie, token) => {
  await axios.post(
    `${url}/comments`,
    {
      content: comment,
      movie: movie,
    },
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );
};

export const deleteComments = async (id, token) => {
  await axios.delete(`${url}/comments/${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
};
