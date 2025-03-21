import { zodResolver } from "@hookform/resolvers/zod";
import { AccountData, accountSchema } from "@type/AuthType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import InputField from "./components/InputField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { handlePassword } from "@services/HandlePassword";
import { AuthRegister } from "@store/AuthAsyncThunk";

const RegisterSection = () => {
  const [showPassword, setShowPassword] = useState<string>("password");
  const [eye, setEye] = useState<string>("eye-close");

  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountData>({
    resolver: zodResolver(accountSchema),
  });

  const togglePassword = () => {
    const { newPassword, newEye } = handlePassword(showPassword, eye);
    setShowPassword(newPassword);
    setEye(newEye);
  };

  const onSubmit = (data: AccountData) => {
    dispatch(AuthRegister(data));
    setTimeout(() => {
      window.location.assign("/login");
    }, 3000);
  };

  return (
    <section className="flex items-center justify-center h-[80vh] text-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl flex flex-col gap-2 w-[500px] bg-white mx-auto p-4 border rounded-lg shadow-md"
      >
        <InputField
          label="Username"
          name="user_username"
          register={register}
          error={errors.user_username?.message}
        />
        <div className="flex justify-between">
          <InputField
            label="Nama Depan"
            name="user_firstname"
            register={register}
            error={errors.user_firstname?.message}
          />
          <InputField
            label="Nama Belakang"
            name="user_lastname"
            register={register}
            error={errors.user_lastname?.message}
          />
        </div>
        <InputField
          label="Pekerjaan"
          name="user_job"
          register={register}
          error={errors.user_job?.message}
        />
        <InputField
          label="Email"
          name="user_email"
          type="email"
          register={register}
          error={errors.user_email?.message}
        />
        <InputField
          label="Nomor Telepon"
          name="user_phone_number"
          register={register}
          error={errors.user_phone_number?.message}
        />
        <InputField
          label="Password"
          name="user_password"
          type={showPassword}
          eye={
            <i
              className={`ri-${eye}-line`}
              onClick={() => togglePassword()}
            ></i>
          }
          register={register}
          error={errors.user_password?.message}
        />
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded-full hover:bg-green-400 cursor-pointer mt-2"
        >
          Daftar Akun
        </button>
      </form>
    </section>
  );
};

export default RegisterSection;
