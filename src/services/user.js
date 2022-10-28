import axios from "axios";

const url = "http://192.168.69.102:8000/api";

export const getUserById = async (setUser, id) => {
  await axios.get(`${url}/users/find/${id}`).then((res) => setUser(res.data));
};
