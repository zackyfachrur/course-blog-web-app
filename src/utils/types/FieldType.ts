import { AccountData } from "@type/AuthType";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  type?: string;
  eye?: ReactNode;
  name: keyof AccountData;
  register: UseFormRegister<AccountData>;
  error?: string;
}
