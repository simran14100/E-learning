import { toast } from "react-hot-toast";
import { setLoading, setUser  } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import { logout } from "./authApi";

const {
  GET_USER_DETAILS_API,
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API,
} = profileEndpoints;

let toastId = null; // Module-level variable to track the toast ID
let isLoading = false; // Flag to track loading state

// Function to get user details
export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    if (!isLoading) {
      isLoading = true; // Set loading state to true
      toastId = toast.loading("Loading..."); // Show loading toast
    }

    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });
      console.log("GET_USER_DETAILS API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
      
      dispatch(setUser ({ ...response.data.data, image: userImage }));
    } catch (error) {
      dispatch(logout(navigate));
      console.log("GET_USER_DETAILS API ERROR............", error);
      toast.error("Could Not Get User Details");
    } finally {
      // Dismiss the loading toast and reset state
      if (toastId) {
        toast.dismiss(toastId);
        toastId = null; // Reset toastId after dismissal
      }
      isLoading = false; // Reset loading state
      dispatch(setLoading(false));
    }
  };
}

// Function to get user enrolled courses
export async function getUserEnrolledCourses(token) {
  const loadingMessage = "Loading...";

  // Check if a loading toast is already displayed
  if (!isLoading) {
    isLoading = true; // Set loading state to true
    toastId = toast.loading(loadingMessage); // Show loading toast
  }

  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("GET_USER_ENROLLED_COURSES_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    // Store the result
    result = response.data.data;
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error);

   
    // Show an error toast
    if (toastId) {
      toast.dismiss(toastId); // Dismiss loading toast
      toast.error("Could Not Get Instructor Data"); // Show error toast
    }
  } finally {
    // Dismiss the loading toast and reset state
    if (toastId) {
      toast.dismiss(toastId);
      toastId = null; // Reset toastId after dismissal
    }
    isLoading = false; // Reset loading state
  }

  return result; // Return the result
}

// Function to get instructor data
export const getInstructorData = async (token) => {
  const loadingMessage = "Loading...";

  // Check if a loading toast is already displayed
  if (!isLoading) {
    isLoading = true; // Set loading state to true
    toastId = toast.loading(loadingMessage); // Show loading toast
  }

  let result = [];
  try {
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log("GET_INSTRUCTOR_DATA_API API RESPONSE:", response);

    // Check if the response contains courses
    if (!response.data || !response.data.courses) {
      throw new Error("No courses data found");
    }
    
    result = response.data.courses; // Store the courses data from the response
    if (Array.isArray(result) && result.length === 0) {
      console.warn("No courses available for the instructor");
    }
  } catch (error) {
    console.log("GET_INSTRUCTOR_DATA_API API ERROR:", error);
    // Show an error toast
    if (toastId) {
      toast.dismiss(toastId); // Dismiss loading toast
      toast.error("Could Not Get Instructor Data"); // Show error toast
    }
  } finally {
    // Dismiss the loading toast and reset state
    if (toastId) {
      toast.dismiss(toastId);
      toastId = null; // Reset toastId after dismissal
    }
    isLoading = false; // Reset loading state
  }

  return result; // Return the result
}