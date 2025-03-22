import { AccountData } from "@type/AuthType";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  type?: string;
  icon?: ReactNode;
  eye?: ReactNode;
  placeholder?: string;
  name: keyof AccountData;
  value?: string;
  register: UseFormRegister<AccountData>;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
