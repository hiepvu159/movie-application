import { getUser, logout } from "../../redux/authSlice";

export const logoutUser = async (dispatch, navigation) => {
  await dispatch(logout());
  navigation.navigate("BottomTabs");
};

export const loginUser = async (
  user,
  dispatch,
  navigation,
  setErrorMessage
) => {
  const res = await dispatch(getUser(user));
  if (res.error) {
    setErrorMessage(res.payload.response.data);
  } else navigation.navigate("BottomTabs");
};
