import { zodResolver } from "@hookform/resolvers/zod";
import { AccountData, accountSchema } from "@type/AuthType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/Store";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import useHandlePassword from "@services/HandlePassword";
import { AuthRegister } from "@store/AuthAsyncThunk";
import useHandlePhoneNumber from "@services/HandleInputNumber";
import AccountSelection from "./AccountSelection";
import PhoneNumber from "./PhoneNumber";

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    togglePassword,
    showPassword,
    eyePassword,
    eyeConfirmPassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useHandlePassword();

  const { handleCodeClick, handleInputNumber, phoneNumber } =
    useHandlePhoneNumber();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountData>({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = (data: AccountData) => {
    dispatch(AuthRegister(data));
    setTimeout(() => {
      window.location.assign("/login");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl flex flex-col gap-2 w-[55%] text-white mx-auto p-4"
    >
      <InputField
        label="Username"
        icon={<i className="ri-user-smile-line px-2 py-2 font-semibold"></i>}
        name="user_username"
        placeholder="Ketik nama panggilan kamu atau samaran"
        register={register}
        error={errors.user_username?.message}
      />
      <div className="flex justify-between gap-4">
        <InputField
          label="Nama Depan"
          icon={<i className="ri-user-line px-2 py-2 font-semibold"></i>}
          placeholder="Nama depan kamu"
          name="user_firstname"
          register={register}
          error={errors.user_firstname?.message}
        />
        <InputField
          label="Nama Belakang"
          icon={<i className="ri-user-2-line px-2 py-2 font-semibold"></i>}
          placeholder="Nama belakang kamu"
          name="user_lastname"
          register={register}
          error={errors.user_lastname?.message}
        />
      </div>
      <InputField
        label="Pekerjaan"
        icon={<i className="ri-briefcase-line px-2 py-2 font-semibold"></i>}
        name="user_job"
        placeholder="Contoh: Manager ICT Departement"
        register={register}
        error={errors.user_job?.message}
      />
      <InputField
        label="Email"
        name="user_email"
        type="email"
        icon={<i className="ri-mail-line px-2 py-2 font-semibold"></i>}
        placeholder="john@gmail.com"
        register={register}
        error={errors.user_email?.message}
      />
      <InputField
        label="Nomor Telepon"
        name="user_phone_number"
        register={register}
        icon={<i className="ri-smartphone-line px-2 py-2 font-semibold"></i>}
        placeholder="misal: 628123456789"
        error={errors.user_phone_number?.message}
        value={phoneNumber}
        onChange={handleInputNumber}
      />

      <PhoneNumber onClick={handleCodeClick} />

      <InputField
        label="Password"
        name="user_password"
        icon={<i className="ri-lock-line px-2 py-2 font-semibold"></i>}
        placeholder="Ketik password kamu"
        type={showPassword}
        eye={
          <i
            className={`ri-${eyePassword}-line cursor-pointer`}
            onClick={() => togglePassword()}
          ></i>
        }
        register={register}
        error={errors.user_password?.message}
      />
      <InputField
        label="Confirm Password"
        name="user_confirmPassword"
        icon={<i className="ri-lock-line px-2 py-2 font-semibold"></i>}
        placeholder="Konfirmasi password kamu"
        type={showConfirmPassword}
        eye={
          <i
            className={`ri-${eyeConfirmPassword}-line cursor-pointer`}
            onClick={() => toggleConfirmPassword()}
          ></i>
        }
        register={register}
        error={errors.user_confirmPassword?.message}
      />
      <AccountSelection />
    </form>
  );
};

export default RegisterForm;
