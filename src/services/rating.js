import axios from "axios";
const url = "http://192.168.69.102:8000/api";

export const addRating = async (rating, movie, token) => {
  await axios.post(
    `${url}/ratings`,
    {
      rating: rating,
      movie: movie,
    },
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );
};
