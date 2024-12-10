// import axios from "axios";

// export const createUser = async (formData) => {
//   try {
//     const response = await axios.post("http://localhost:8089/auth/signup", formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error during API call:", error.response || error.message);
//     throw error;
//   }
// };

import axios from 'axios';

const API_BASE_URL = "http://localhost:8089/auth/signup";

export const getUsers = async () => {
    return await axios.get(API_BASE_URL);
};

export const createUser = async (user) => {
    return await axios.post(API_BASE_URL,user);
};