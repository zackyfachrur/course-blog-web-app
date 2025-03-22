import CountryPhone from "../utils/json/CountryPhone.json";

type Country = {
  name: string;
  code: string;
};

export const getCountryPhone = (): Country[] => {
  return CountryPhone.countries;
};
