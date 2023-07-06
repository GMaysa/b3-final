import axios from "axios"
import { setFlight } from "../reducers/searchFlightsReducers";

export const getAllFlightSearchResult =
  (seatClass, depAirport, arrAirport, flightDate, navigate) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/flight/search?seat_class=${seatClass}&dep_airport=${depAirport}&arr_airport=${arrAirport}&flight_date=${flightDate}`
      );
      // console.log(response)
      navigate('/search')
      
      dispatch(setFlight(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response.message);
        return;
      }
      console.log(error);
    }
  };
