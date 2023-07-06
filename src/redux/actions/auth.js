import axios from "axios";
import { setIsLogeedIn, setToken, setUser } from "../reducers/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const login = (data, navigate) => async (dispatch) => {
  // data berisi email dan paswword
  // navbigate setelah input langsung ke home
  try {
    const response = await axios.post(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/login",
      data
    );
    const { accessToken } = response?.data.data[0];
    // console.log(response?.data.data[0].accessToken)
    dispatch(setToken(accessToken));
    dispatch(setIsLogeedIn(true));

    //mendirect ke pay
    navigate("/");
    // biasanya passing melalui komponen saja
  } catch (error) {
    if (axios.isAxiosError(error)){
      toast.error(error?.response?.data?.message)
      // error?.response.data.message;
      return;
    }
    toast.error(error.message)
  // muncul kaya pop up toast.error(error message)

  }
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/register",
      data
    );
    const { accessToken } = response?.data.data[0];

    dispatch(setToken(accessToken));
    dispatch(setIsLogeedIn(true));

    navigate("/otp");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch(setToken(null));
  dispatch(setIsLogeedIn(false));
  dispatch(setUser(null));

  // redirect to login
  if (navigate) navigate("/login");
};

export const reset = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.put('https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/forgot-password', data
    );
    const { accessToken } = response?.data.data[0];

    dispatch(setToken(accessToken));
    dispatch(setIsLogeedIn(true));

    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)){
      toast.error(error?.response?.data?.message)
      return; 
    }
    toast.error(error.message)
  }
};

export const otpcode = (data, navigate) => async (dispatch) =>{

  try {
    const response = await axios.post(
      "https://gcpflypal-l5tho6hrtq-as.a.run.app/api/v1/user/activate",
      data
    );
    const { accessToken } = response?.data.data[0];

    dispatch(setToken(accessToken));
    dispatch(setIsLogeedIn(true));

    navigate("/");
    // kelogin
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // toast.error(error?.response?.data?.message)
      return;
    }
    // toast.error(error.message)
  }
};
