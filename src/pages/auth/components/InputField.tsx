import { InputFieldProps } from "@type/FieldType";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  register,
  error,
  placeholder,
  icon,
  value,
  onChange,
  eye,
  onMouseEnter,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-md font-medium">
          {label}
        </label>
      </div>
      <div className="flex gap-1 items-center w-full bg-gray-600 rounded-md border border-gray-500 font-medium px-2">
        {icon}
        <input
          {...register(name)}
          id={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          onMouseEnter={onMouseEnter}
          className="w-full py-2 bg-transparent outline-none"
        />
        {eye}
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export default InputField;
