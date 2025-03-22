import * as z from "zod";

export const accountSchema = z
  .object({
    user_username: z
      .string()
      .min(3, "Minimal 3 karakter untuk Username")
      .max(30, "Maximal 30 karakter untuk Username"),
    user_firstname: z
      .string()
      .min(3, "Nama depan minimal 3 karakter")
      .max(30, "Maximal 30 karakter untuk Nama Depan"),
    user_lastname: z
      .string()
      .min(3, "Nama Belakang minimal 3 karakter")
      .max(30, "Maximal 30 karakter untuk Nama Belakang"),
    user_job: z.string().max(30, "Maximal 30 karakter untuk job title"),
    user_email: z.string().email("Format Email tidak Valid"),
    user_phone_number: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, "Nomor telepon tidak valid"),
    user_password: z.string().min(6, "Password minimal 6 karakter"),
    user_confirmPassword: z.string().min(6, "Password minimal 6 karakter"),
  })
  .refine((pass) => pass.user_password === pass.user_confirmPassword, {
    message: "Password tidak sesuai",
    path: ["user_confirmPassword"],
  });

export type AccountData = z.infer<typeof accountSchema>;

export type Data = {
  data: AccountData[];
  loading: boolean;
  error?: string | null;
};

export interface InputComponentProps {
  labelContent: string;
  inputType: string;
  inputID: string;
  inputName: string;
  value: string;
  onChange: () => void;
}

export type User = {
  email: string;
  password?: string;
};
