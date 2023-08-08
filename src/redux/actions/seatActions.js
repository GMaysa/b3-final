import axios from "axios";
import { toast } from "react-toastify";
import {
  setSeatDetails,
  setSeatDetailsTwo,
  setUpdateSeat,
} from "../reducers/seatReducers";

export const getSeatDetails =
  (seatClassName, flightCode, seatReturn) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/flight/seats?class=${seatClassName}&flight_code=${flightCode}`
      );
      console.log("berhasil");
      if (seatReturn) {
        dispatch(setSeatDetailsTwo(response.data));
      } else {
        dispatch(setSeatDetails(response.data));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error(error?.message);
    }
  };

export const updateSeatStatus = (seatId, booked) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/flight/seats/${seatId}`,
      {
        booked: booked,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    dispatch(setUpdateSeat(response.data));
    toast.success("Seat status updated successfully.");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
