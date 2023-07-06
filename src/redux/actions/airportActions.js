import axios from "axios";
import { setAirportData } from "../reducers/airportReducers";

export const getAirport = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/airport`
    );
    // console.log(response)
    dispatch(setAirportData(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response.message);
      return;
    }
    console.log(error);
  }
};
