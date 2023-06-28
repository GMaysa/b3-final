import axios from "axios";
import { toast } from "react-toastify";
import { setTransDetails } from "../reducers/transactionReducers";

export const getTransDetails = (pay, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjA4MzQ4MzQyMzEiLCJyb2xlIjoiQ09TVFVNRVIiLCJzdWIiOiJtYWJhbGlib3k0NUBnbWFpbC5jb20iLCJpYXQiOjE2ODc5NzAzNzQsImV4cCI6MTY4ODA1Njc3NH0.dNo-3amy5A7zzChdUGdTKRc2nD1a7Dpeb6ZKCSLzfq4";
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/charge`,
      pay,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log(pay);
    dispatch(setTransDetails(response.data));
    navigate("/payment");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
