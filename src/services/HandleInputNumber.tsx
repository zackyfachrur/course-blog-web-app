import { useState } from "react";

const useHandlePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\+?[0-9]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleCodeClick = (code: string) => {
    setPhoneNumber(code);
  };

  return { phoneNumber, handleInputNumber, handleCodeClick };
};

export default useHandlePhoneNumber;
