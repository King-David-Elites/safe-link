import { useFetch } from "@/hooks/useFetch";
import Toast from "react-hot-toast";
import axios from "axios";
import { clearUserData, getAccessToken } from "./userDetails";
//const { fetch } = useFetch();

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
export const createApiInstance = async (router: any) => {
  const accessToken = await getAccessToken();
  //console.log({ accessToken });
  const api = axios.create({
    baseURL: baseUrl,
    //timeout: 20000,
    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect to sign-in page
        //router.replace("/account-type");
        clearUserData();
        //logOut();
        router.replace("/login");
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export const fetchInventory = async (router: any): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get("/inventory");
    console.log("Inventory response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    //Toast.error("Error fetching inventory");
    return null;
  }
};

export const fetchSingleInventory = async (
  id: string | null,
  router: any
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get(`/inventory/${id}`);
    console.log("Inventory response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    Toast.error("Error fetching inventory");
    return null;
  }
};

export const fetchUserInventory = async (
  id: string,
  router: any
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get(`/inventory/user/${id}`);
    console.log("Inventory response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    Toast.error("Error fetching inventory");
    return null;
  }
};

export const fetchInventoryBySearch = async (
  query: string
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    //const api = await createApiInstance(router);
    // const formData = new FormData();
    // formData.append("query", query);

    const response = await axios.post(
      "https://safelink-search-api.onrender.com/search",
      { query },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Inventory search response:", response);

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching search inventory:", error);
    //Toast.error("Error fetching inventory");
    return null;
  }
};

export const updateProfile = async (data: any, router: any) => {
  Toast.dismiss();
  const api = await createApiInstance(router);
  try {
    const response = await api.put(`user/`, data);
    console.log("rr", response.data.data);
    if (response.status === 200) {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        Toast.success("Profile updated successfully");
      }
    } else {
      //console.log()
      Toast.error("Error updating profile");
    }
  } catch (e) {
    console.error("Error updating profile:", e);
    Toast.error("Error updating profile");
    return null;
  }
};

export const addInventory = async (data: any, router: any) => {
  Toast.dismiss();
  const api = await createApiInstance(router);
  try {
    const response = await api.post(`/inventory`, data);
    console.log("rr", response);
    if (response.status === 200 || response.status === 201) {
      Toast.success("Inventory added successfully");
    } else {
      console.log("error addidng inventory", response);
      Toast.error("Error adding inventory");
    }
  } catch (e) {
    console.error("Error adding inventory:", e);
    Toast.error("Error adding inventory");
    return null;
  }
};

export const fetchQuestions = async (router: any): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await axios.get(`${baseUrl}/questions`);
    console.log("Questions response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    Toast.error("Error fetching inventory");
    return null;
  }
};

export const submitAnswer = async (
  questionId: string,
  answer: string,
  router: any
) => {
  Toast.dismiss();
  const api = await createApiInstance(router);
  try {
    const response = await api.post(`/questions/${questionId}/answer`, {
      answer,
    });
    if (response.status === 200) {
      //Toast.success("Answer submitted successfully");
      console.log("Answer submitted successfully");
    } else {
      Toast.error("Error submitting answer");
    }
  } catch (e) {
    console.error("Error submitting answer:", e);
    Toast.error("Error submitting answer");
    return null;
  }
};

export const fetchQuestionsAnswers = async (
  router: any
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get(`/questions/answer`);
    //console.log("Questions and Answers response:", response);

    const data = response.data.data;

    return data;
  } catch (error) {
    console.error("Error fetching question and answers:", error);
    //Toast.error("Error fetching question and answers:");
    return null;
  }
};

export const fetchUsers = async (router: any): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get(`/user/all`);
    console.log("Users response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    //Toast.error("Error fetching user");
    return null;
  }
};

export const fetchUser = async (router: any): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get(`/user/`);
    console.log("User response:", response);

    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    //Toast.error("Error fetching user");
    return null;
  }
};

export const getSubscriptionPlans = async (
  router: any
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.get("/user/subscription/plan");
    console.log("Subscription plans response:", response);

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    Toast.error("Error fetching subscription plans");
    return null;
  }
};

export const initiateSubcription = async (
  router: any,
  id: string
): Promise<any[] | null> => {
  Toast.dismiss();
  try {
    const api = await createApiInstance(router);
    const response = await api.post("/user/subscription/subcriptions", {
      planId: id,
    });
    console.log("Subscription plans response:", response);

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    Toast.error("Error fetching subscription plans");
    return null;
  }
};

// try {
//   const response = await axios.post("/api/listing", data);
//   console.log(response.data);
// } catch (error) {
//   console.error("There was an error!", error);
// }
