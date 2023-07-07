import axios from "axios";
import { toast } from "react-toastify";
import { setBooking, setBookingDetails } from "../reducers/bookingReducers";

export const getBooking = (bookingCode) => async (dispatch) => {
  try {
    const bookingMessage = JSON.parse(localStorage.getItem("bookingMessage"));
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const bookingCode = bookingMessage.data[0].booking.bookingCode;
    const response = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/detail/${bookingCode}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log("berhasil");
    dispatch(setBooking(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const postBookingDetails = (data, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/booking`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    console.log(response.data);
    localStorage.setItem("bookingMessage", JSON.stringify(response.data));
    dispatch(setBookingDetails(response.data));
    navigate("/pay");
  } catch (error) {
    alert(error);
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};
