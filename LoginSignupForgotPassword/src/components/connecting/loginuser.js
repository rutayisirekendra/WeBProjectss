// import axios from 'axios';

// const API_BASE_URL = "http://localhost:8089/auth";
// export const loginUser = async (credentials) => {
//     try {
//         console.log("Login attempt with:", credentials);

//         const response = await axios.post(`${API_BASE_URL}/login`, credentials);

//         console.log("Successful login:", response.data); // Debugging
//         return response.data;
//     } catch (error) {
//         console.error("Error response:", error.response?.data || error.message);
//         const errorMessage = error.response?.data?.message || "Login failed.";
//         throw new Error(errorMessage);
//     }
// };
import axios from "axios";

const API_BASE_URL = "http://localhost:8089/auth";

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login`,
            null, 
            {
                params: {
                    username: credentials.username, 
                    password: credentials.password 
                },
            }
        );
        return response.data; // Ensure the response data is returned properly
    } catch (error) {
        console.error("Error response:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Login failed.");
    }
};


export const twoFactorVerification = async (username,otp) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/verify-2fa`, null, {
            params: { username,otp }
           
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "An error occurred while processing your request.");
    }
};


export const sendOtp = async (username) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, null, {
            params: { username }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Failed to send OTP.");
    }
};







