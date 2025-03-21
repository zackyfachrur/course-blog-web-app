import { DeleteValidationProps, LabelProps } from "@type/ServiceComponentType";

export const Label: React.FC<LabelProps> = ({ content, target }) => {
  return (
    <>
      <label htmlFor={target} className="text-2xl font-semibold">
        {content}
      </label>
    </>
  );
};

export const DeleteValidation: React.FC<DeleteValidationProps> = ({
  onCancel,
  onAccept,
}) => {
  return (
    <div className="absolute z-50 bg-white h-[50%] drop-shadow-md rounded-3xl w-[50%] flex justify-center items-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Delete Data</h2>
        <p>Are you sure want to delete data?</p>
      </div>
      <div className="flex gap-2">
        <button
          className="px-5 py-2 font-bold text-white bg-green-500 rounded-xl hover:bg-green-600"
          onClick={onAccept}
        >
          Yes
        </button>
        <button
          className="px-5 py-2 font-bold text-white bg-red-500 rounded-xl hover:bg-red-600"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  );
};
