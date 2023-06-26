import axios from "axios";
import { toast } from "react-toastify";
import { setData, setDataDetails } from "../reducers/airportReducers";

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/airport`
    );
    dispatch(setData(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getDataDetails = (airportId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/airport/${airportId}`
    );
    dispatch(setDataDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
