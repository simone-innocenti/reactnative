import axios from "react-native-axios";
const url = "https://covid19.mathdro.id/api";

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    return null;
  }
};

export const fetchData = async (country) => {
  let countryUrl = url;

  if (country) {
    countryUrl = `${url}/countries/${country}`;
  }
  console.log(countryUrl);
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countryUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log("ERRORE");
    return { confirmed: null };
  }
};
