/** @format */

import axios from "axios";
import { toast } from "react-toastify";
import {
  setHistorys,
  setHistoryDetail,
  setHistoryFilter,
  setHistorySearch,
  setHistoryTicket,
} from "../reducers/historyReducers";

export const getHistory = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
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
    if (bookingCode) {
      const accesstoken = localStorage.getItem("token");
      const { data } = await axios.get(
        `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/detail/${bookingCode}`,
        {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        }
      );

      dispatch(setHistoryDetail(data.data[0]));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getHistoryFilter = (from_date, to_date) => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/history?from_date=${from_date}&to_date=${to_date}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setHistoryFilter(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getHistorySearch = (bookingCode) => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/detail/user/${bookingCode}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setHistorySearch(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getTicket = (bookingCode) => async (dispatch) => {
  try {
    if (bookingCode) {
      const accesstoken = localStorage.getItem("token");
      const { data } = await axios.get(
        `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/send-email?booking_code=${bookingCode}`,
        {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        }
      );

      dispatch(setHistoryTicket(data));
      toast.success("Ticket has been sent to your email.");
      console.log(data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
