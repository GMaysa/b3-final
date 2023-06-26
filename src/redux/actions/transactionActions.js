import axios from "axios";
import { toast } from "react-toastify";
import { setTrans, setTransDetails } from "../reducers/transactionReducers";

export const getTrans = () => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_POSTS_API}/transactions/charge`
      );
      dispatch(setTrans(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error(error?.message);
    }
  };
  
export const getTransDetails = (trxId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/transactions/charge/${trxId}`
    );
    dispatch(setTransDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
