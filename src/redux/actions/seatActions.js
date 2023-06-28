import axios from "axios";
import { toast } from "react-toastify";
import { setSeatDetails } from "../reducers/seatReducers";

export const getSeatDetails = () => async (dispatch) => {
  try {
    const accesstoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjM0ODIzNDAyMzQiLCJyb2xlIjoiQ09TVFVNRVIiLCJzdWIiOiJnaWxhbmc0NUBnbWFpbC5jb20iLCJpYXQiOjE2ODc4ODA3NzksImV4cCI6MTY4Nzk2NzE3OX0.N5x31Esz56Say84UB3Twh4nXwIi1-CufBeYt9ZZUP1E";
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/flight/seats?class=ECONOMY&flight_code=GA-3992`
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

// Di dalam seatActions.js
export const updateSeatStatus = (seatId, booked) => async (dispatch) => {
  try {
    const accesstoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjA4MzQ4MzQyMyIsInJvbGUiOiJDT1NUVU1FUiIsInN1YiI6Im1hYmFsaWJveTQ1QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg2OTY3OSwiZXhwIjoxNjg3OTU2MDc5fQ.HU4_FRSWOWpyzQgcgzSErDqsjCtw4ZF729pHfc1C4oE";
    const response = await axios.put(
      `${process.env.REACT_APP_POSTS_API}/flight/seats/${seatId}`,
      {
        booked: booked,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setSeatDetails(response.data));
    toast.success("Seat status updated successfully.");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
