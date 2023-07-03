import axios from "axios";
import { toast } from "react-toastify";
import { setHistorys, setHistoryDetail } from "../reducers/historyReducers";

export const getHistory = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("accesstoken");
    const { data } = await axios.get(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/history",
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setHistorys(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getHistoryDetail = (bookingCode) => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("accesstoken");
    const { data } = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/detail/${bookingCode}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setHistoryDetail(data.data[0]));
    console.log(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
