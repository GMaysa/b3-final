import axios from "axios";
import { toast } from "react-toastify";
import { setPayconfirm } from "../reducers/payconfirmReducers";

export const getPayconfirm = (formData, navigate) => async (dispatch) => {
  try {
    const accesstoken =
      localStorage.getItem("token") ||
      document.cookie.match(/(?<=token=)[^;]+/)?.[0];
    const response = await axios.post(
      `https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/transactions/confirm`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(formData);
    console.log("berhasilconfirm");
    dispatch(setPayconfirm(response.data));
    navigate("/paysuccess");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
