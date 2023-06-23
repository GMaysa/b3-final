import axios from "axios";

// Action types
export const UPDATE_CUSTOMER_DATA = "UPDATE_CUSTOMER_DATA";
export const UPDATE_PASSENGERS_DATA = "UPDATE_PASSENGERS_DATA";

// Action creators
export const updateCustomerData = (customer) => {
  return { type: UPDATE_CUSTOMER_DATA, payload: customer };
};

export const updatePassengersData = (passengers) => {
  return { type: UPDATE_PASSENGERS_DATA, payload: passengers };
};

// Async action creator to post data to API
export const postDataToApi = (data) => {
  return (dispatch) => {
    axios
      .post("https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/booking", data)
      .then((response) => {
        console.log("Data successfully posted to API:", response.data);
        // Dispatch additional actions or update state as needed
      })
      .catch((error) => {
        console.error("Error posting data to API:", error);
        // Dispatch additional actions or update state as needed
      });
  };
};
