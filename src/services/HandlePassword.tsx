import { useState } from "react";

const useHandlePassword = () => {
  const [showPassword, setShowPassword] = useState<string>("password");
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<string>("password");
  const [eyePassword, setEyePassword] = useState<string>("eye-close");
  const [eyeConfirmPassword, setEyeConfirmPassword] =
    useState<string>("eye-close");

  // for Toggle Password Eye and Text value
  const handlePassword = (showPassword: string, eyePassword: string) => {
    const newPassword = showPassword === "password" ? "text" : "password";
    const newEyePassword = eyePassword === "eye" ? "eye-close" : "eye";

    return {
      newPassword,
      newEyePassword,
    };
  };

  // for Toggle Confirm Password Eye and Text value
  const handleConfirmPassword = (
    showConfirmPassword: string,
    eyeConfirmPassword: string
  ) => {
    const newConfirmPassword =
      showConfirmPassword === "password" ? "text" : "password";
    const newEyeConfirmPassword =
      eyeConfirmPassword === "eye" ? "eye-close" : "eye";

    return {
      newConfirmPassword,
      newEyeConfirmPassword,
    };
  };

  // for Toggle Password
  const togglePassword = () => {
    const { newPassword, newEyePassword } = handlePassword(
      showPassword,
      eyePassword
    );
    setShowPassword(newPassword);
    setEyePassword(newEyePassword);
  };

  // for Toggle Confirm Password
  const toggleConfirmPassword = () => {
    const { newConfirmPassword, newEyeConfirmPassword } = handleConfirmPassword(
      showConfirmPassword,
      eyeConfirmPassword
    );

    setShowConfirmPassword(newConfirmPassword);
    setEyeConfirmPassword(newEyeConfirmPassword);
  };

  // for Reuseable Function
  return {
    handlePassword,
    showPassword,
    eyePassword,
    togglePassword,
    toggleConfirmPassword,
    showConfirmPassword,
    eyeConfirmPassword,
    handleConfirmPassword,
  };
};

export default useHandlePassword;
