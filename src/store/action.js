import Axios from "axios";
import toast from "react-hot-toast";
import { pgtSliceActions } from "./reducer";

let baseUrlDev =
  process.env.NODE_ENV == "development" ? "http://localhost:4000" : "";

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
          dispatch(
            pgtSliceActions.setAdmin({
              isAdmin: true
            })
          );
        }
        dispatch(pgtSliceActions.onLogin({ ...response.data.profile }));
        localStorage.setItem("token", "Bearer " + response.data.token);
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
    let list = response.data.result ? response.data.result : [];
    dispatch(pgtSliceActions.setBloodDonorsList(list));
  };
};

export const addEnquiry = (enquiryDetails) => {
  return async (dispatch) => {
    dispatch(pgtSliceActions.setIsLoading(true));
    let response = await Axios.post(
      `${baseUrlDev}/user/add-enquiry`,
      enquiryDetails
    );
    dispatch(pgtSliceActions.setIsLoading(false));
    if (!response.data.message) {
      throw "Sorry one enquiry per person";
    }
  };
};

export const getEnquiries = () => {
  return async (dispatch) => {
    dispatch(pgtSliceActions.setIsLoading(true));
    const toastId = toast.loading("Searching new enquiries...", {
      id: "clipboard",
    });
    let response = await Axios.get(`${baseUrlDev}/admin/enquiries/0`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    toast.dismiss(toastId);
    dispatch(pgtSliceActions.setIsLoading(false));
    if (!response.data.message) {
      throw response.data.reason;
    } else if (response.data.message) {
      if (response.data.admin && response.data.enquiries) {
        dispatch(
          pgtSliceActions.setAdmin({
            isAdmin: true,
            enquiries: response.data.enquiries,
          })
        );
      }
    }
  };
};

export const updateEnquiries = (mailId) => {
  return async (dispatch) => {
    const toastId = toast.loading("Marking completed...", {
      id: "clipboard",
    });
    let response = await Axios.put(
      `${baseUrlDev}/admin/update-enquiry-status`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        mailId,
        status: 1,
      }
    );
    toast.dismiss(toastId);
    if (!response.data.message) {
      throw response.data.reason;
    } else if (response.data.message && response.data.enquiries) {
      if (response.data.admin) {
        dispatch(
          pgtSliceActions.setAdmin({
            isAdmin: true,
            enquiries: response.data.enquiries,
          })
        );
      }
    }
  };
};

export const deleteEnquiries = (mailId) => {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting enquiry...", {
      id: "clipboard",
    });
    let response = await Axios.delete(
      `${baseUrlDev}/admin/delete-enquiry/${mailId}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        mailId,
      }
    );
    toast.dismiss(toastId);
    if (!response.data.message) {
      throw response.data.reason;
    } else if (response.data.message && response.data.enquiries) {
      if (response.data.admin) {
        dispatch(
          pgtSliceActions.setAdmin({
            isAdmin: true,
            enquiries: response.data.enquiries,
          })
        );
      }
    }
  };
};


export const deleteBloodDonorAction = ({phNo, bloodGroup}) => {
  return async (dispatch) => {
    dispatch(pgtSliceActions.setIsLoading(true));
    let response = await Axios.delete(
      `${baseUrlDev}/admin/delete-donor/${phNo}/${bloodGroup}`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      }
    );

    dispatch(pgtSliceActions.setIsLoading(false));
    if (!response.data.message) {
      throw "Error in fetching blood groups";
    }
    let list = response.data.result ? response.data.result : [];
    dispatch(pgtSliceActions.setBloodDonorsList(list));
  }
}
