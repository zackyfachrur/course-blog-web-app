import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryPhones } from "@store/PhoneNumber";
import { RootState, AppDispatch } from "@store/Store";

interface CountryPhoneListProps {
  onClick: (code: string) => void;
  onMouseLeave?: () => void;
}

const CountryPhoneList: React.FC<CountryPhoneListProps> = ({
  onClick,
  onMouseLeave,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: countries,
    loading,
    error,
  } = useSelector((state: RootState) => state.phones);

  useEffect(() => {
    dispatch(fetchCountryPhones());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div
      className="flex flex-col gap-2 h-[200px] overflow-y-scroll absolute w-[220px] left-[39%] top-[53%]"
      onMouseLeave={onMouseLeave}
    >
      {countries.map((country, index) => (
        <div
          className="bg-gray-600 rounded-xl px-5 py-2 font-semibold cursor-pointer hover:bg-gray-500"
          key={index}
        >
          <p onClick={() => onClick(country.code)}>
            ({country.code}) {country.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountryPhoneList;
