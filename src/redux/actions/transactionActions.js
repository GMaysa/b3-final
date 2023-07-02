import axios from "axios";
import { toast } from "react-toastify";
import {
  setTransDetails,
  setTransGoDetails,
  setTransVADetails,
} from "../reducers/transactionReducers";

export const getTransDetailsGo = (paygo, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/charge`,
      paygo,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log("berhasil bayar");
    console.log(paygo);
    dispatch(setTransGoDetails(response.data));
    navigate("/payconfirm");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getTransDetails = (pay, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/charge`,
      pay,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log("berhasil bayar");
    console.log(pay);
    dispatch(setTransDetails(response.data));
    navigate("/payconfirm");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
export const getTransDetailsVA = (payva, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/charge`,
      payva,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log("berhasil bayar");
    console.log(payva);
    dispatch(setTransVADetails(response.data));
    navigate("/payconfirm");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
