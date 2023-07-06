import axios from "axios";
import { toast } from "react-toastify";
import { setSeatDetails, setUpdateSeat } from "../reducers/seatReducers";

export const getSeatDetails =
  (seatClassName, flightCode) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/flight/seats?class=${seatClassName}&flight_code=${flightCode}`
      );
      console.log("berhasil");
      dispatch(setSeatDetails(response.data));
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
    const response = await axios.put(
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
