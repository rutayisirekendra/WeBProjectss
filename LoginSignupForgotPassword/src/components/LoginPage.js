
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, AlertCircle, Loader, CheckCircle } from "lucide-react";
import { loginUser, sendOtp, twoFactorVerification } from "./connecting/loginuser"; // Adjusted for OTP logic
import {
  PageContainer,
  FormContainer,
  Title,
  Form,
  InputGroup,
  Input,
  InputIcon,
  Button,
  ErrorMessage,
  LinkText,
} from "./shared-styles";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }
    if (formData.password.trim().length < 4) {
      newErrors.password = "Password must be at least 4 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setLoginMessage(null);

    try {
      const response = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      setShowOtpField(true);
      setLoginMessage({
        type: "success",
        text: response || "OTP sent to your email. Please verify to continue.",
      });
    } catch (error) {
      setLoginMessage({
        type: "error",
        text: error.message || "Invalid username or password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);

    try {
      const token = await twoFactorVerification(formData.username, otp);

      localStorage.setItem("authToken", token);
      setLoginMessage({
        type: "success",
        text: "Login successful!",
      });

      // Simulate redirection to dashboard
      setTimeout(() => {
        // window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      setLoginMessage({
        type: "error",
        text: error.message || "Invalid OTP.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOtpChange = (event) => setOtp(event.target.value);

  return (
    <PageContainer>
      <FormContainer>
        <Title>Login</Title>
        <Form>
          {/* Username Input */}
          <InputGroup>
            <InputIcon>
              <User size={18} />
            </InputIcon>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </InputGroup>
          {errors.username && (
            <ErrorMessage>
              <AlertCircle size={18} />
              {errors.username}
            </ErrorMessage>
          )}

          {/* Password Input */}
          <InputGroup>
            <InputIcon>
              <Lock size={18} />
            </InputIcon>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </InputGroup>
          {errors.password && (
            <ErrorMessage>
              <AlertCircle size={18} />
              {errors.password}
            </ErrorMessage>
          )}

          {/* Send OTP Button */}
          {!showOtpField && (
            <Button type="button" onClick={handleSendOtp} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="animate-spin" size={18} style={{ marginRight: "8px" }} />
                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </Button>
          )}

          {/* OTP Input and Verify Button */}
          {showOtpField && (
            <>
              <InputGroup>
                <Input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP"
                />
              </InputGroup>
              <Button type="button" onClick={handleVerifyOtp} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" size={18} style={{ marginRight: "8px" }} />
                    Verifying...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </>
          )}
        </Form>

        {/* Login Message */}
        {loginMessage && (
          <div
            style={{
              marginTop: "16px",
              color: loginMessage.type === "success" ? "green" : "red",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {loginMessage.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {loginMessage.text}
          </div>
        )}

        {/* Links */}
        <LinkText>
        Don't have an account? <a href="/signup">Sign up</a>
        </LinkText>
        <LinkText>
          <a href="/forgot-password">Forgot password?</a>
        </LinkText>
      </FormContainer>
    </PageContainer>
  );
}

export default LoginPage;


