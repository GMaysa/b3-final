/** @format */

import axios from "axios";
import { toast } from "react-toastify";
import { setProfile } from "../reducers/profileReducers";

export const getProfile = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.get(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/profile",
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setProfile(data.data[0]));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const editProfile = (updatedProfile) => async (dispatch, getState) => {
  try {
    const accesstoken = localStorage.getItem("token");
    const { data } = await axios.post(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/profile",
      {
        name: updatedProfile.name || null,
        phone: updatedProfile.phone || null,
        gender: updatedProfile.gender,
        birthDate: updatedProfile.birthDate,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    dispatch(setProfile(data.data[0]));

    console.log("Profile updated successfully!");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
