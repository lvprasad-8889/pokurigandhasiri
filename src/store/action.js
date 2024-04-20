import Axios from "axios";
import toast from "react-hot-toast";
import { pgtSliceActions } from "./reducer";

let baseUrlDev = "http://localhost:4000";

export const shortHandNotationOfName = (name) => {
  let res = name.split(" ");
  if (res.length > 1) {
    return res[0][0] + res[1][0];
  }
  return res[0][0] + res[0][1];
};

export const registerAction = (userCredentials) => {
  return async (dispatch) => {
    const toastId = toast.loading("Registering...", {
      id: "clipboard",
    });
    let response = await Axios.post(
      `${baseUrlDev}/user/register`,
      userCredentials
    );
    toast.dismiss(toastId);
    if (!response.data.message) {
      throw response.data.reason;
    }
  };
};

export const loginAction = (userCredentials) => {
  return async (dispatch) => {
    const toastId = toast.loading("Verifying...", {
      id: "clipboard",
    });
    let response = await Axios.post(
      `${baseUrlDev}/user/login`,
      userCredentials
    );
    toast.dismiss(toastId);
    if (response.data.message) {
      if (response.data.admin) {
        dispatch(pgtSliceActions.setAdmin(true));
      }
      dispatch(pgtSliceActions.onLogin({ ...response.data.profile }));
      localStorage.setItem("token", response.data.token);
    } else {
      throw response.data.reason;
    }
  };
};

export const addBloodDonorAction = (bloodDonorCredentials) => {
  return async (dispatch) => {
    const toastId = toast.loading("Adding...", {
      id: "clipboard",
    });
    let response = await Axios.post(
      `${baseUrlDev}/user/add-blood-donor`,
      bloodDonorCredentials
    );
    toast.dismiss(toastId);
    if (!response.data.message) {
      throw response.data.reason;
    }
  };
};

export const searchBloodGroupAction = (bloodGroup) => {
  return async (dispatch) => {
    dispatch(pgtSliceActions.setIsLoading(true));
    let response = await Axios.get(
      `${baseUrlDev}/user/blood-donors/${bloodGroup}`
    );
    dispatch(pgtSliceActions.setIsLoading(false));
    if (!response.data.message) {
      throw "Error in fetching blood groups";
    }
    dispatch(pgtSliceActions.setBloodDonorsList([...response.data.result]));
  };
};
