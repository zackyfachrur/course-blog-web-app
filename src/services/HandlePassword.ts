export const handlePassword = (showPassword: string, eye: string) => {
  const newPassword = showPassword === "password" ? "text" : "password";
  const newEye = eye === "eye" ? "eye-close" : "eye";

  return { newPassword, newEye };
};
