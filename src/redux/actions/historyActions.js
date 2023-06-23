import axios from "axios";
import { toast } from "react-toastify";
import { setHistorys } from "../reducers/historyReducers";

export const getHistory = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transaction/history"
    );
    dispatch(setHistorys(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
