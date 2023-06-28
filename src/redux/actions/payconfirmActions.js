import axios from "axios";
import { toast } from "react-toastify";
import { setPayconfirm } from "../reducers/payconfirmReducers";

export const getPayconfirm = (payconfirm, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjM0ODIzNDAyMzQiLCJyb2xlIjoiQURNSU4iLCJzdWIiOiJqb2huZG9lQGZseXBhbC5jb20iLCJpYXQiOjE2ODcyOTQ0MjgsImV4cCI6MTY4NzI5NDQyOH0.SU5NIXnv-AfqXaOuEvW7XEZNc4k4zc90sWql6c9eZyA";
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/confirm`,
      payconfirm,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log(payconfirm);
    console.log("berhasilconfirm");
    dispatch(setPayconfirm(response.data));
    navigate("/paysuccess");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
