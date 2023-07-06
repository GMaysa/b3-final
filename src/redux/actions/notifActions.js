/** @format */

import axios from "axios";
import { toast } from "react-toastify";
import { setNotifs, setFilter, setStatus } from "../reducers/notifReducers";

export const getNotif = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.get(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/notification/user",
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setNotifs(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getFilter = (categoryName) => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.get(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/notification/user?category=${categoryName}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setFilter(data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const updateStatus = (notificationId) => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.post(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/notification/read?notification_id=${notificationId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setStatus(notificationId));
    console.log("Status updated successfully!");
    return data.notification;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return null;
    }
    toast.error(error?.message);
    return null;
  }
};
