import axios from "axios";
import { toast } from "react-toastify";
import { setBooking, setBookingDetails } from "../reducers/bookingReducers";
import { useState } from "react";

export const postBooking = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/booking`
    );
    dispatch(setBooking(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const postBookingDetails = (data, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjA4MzQ4MzQyMzEiLCJyb2xlIjoiQ09TVFVNRVIiLCJzdWIiOiJtYWJhbGlib3k0NUBnbWFpbC5jb20iLCJpYXQiOjE2ODc5NzAzNzQsImV4cCI6MTY4ODA1Njc3NH0.dNo-3amy5A7zzChdUGdTKRc2nD1a7Dpeb6ZKCSLzfq4";
    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API}/transactions/booking`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    dispatch(setBookingDetails(response.data));
    navigate("/pay");
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
