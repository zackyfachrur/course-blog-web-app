import { InputFieldProps } from "@type/FieldType";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  register,
  error,
  eye,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={name} className="text-gray-800 text-md font-medium">
          {label}
        </label>
        {eye}
      </div>
      <input
        {...register(name)}
        type={type}
        className="w-full p-2 rounded-md outline-none border-2 border-gray-300 font-medium"
      />
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export default InputField;
