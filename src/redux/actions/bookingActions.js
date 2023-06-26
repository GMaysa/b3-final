import axios from "axios";
import { toast } from "react-toastify";
import { setBooking, setBookingDetails } from "../reducers/bookingReducers";

export const getBooking = () => async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_POSTS_API}/transactions/booking`
      );
      dispatch(setBooking(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error(error?.message);
    }
  };
  
export const getBookingDetails = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/transactions/booking/${userId}`
    );
    dispatch(setBookingDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
