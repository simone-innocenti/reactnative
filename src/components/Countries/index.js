import React from "react";
import { View, Picker } from "react-native";

export default CountriesPicker = ({
  countries,
  setCountries,
  currentCountry,
  setCurrentCountry,
}) => {
  return (
    <View>
      {countries.length ? (
        <Picker
          onValueChange={(itemValue, itemIndex) => {
            setCurrentCountry(itemValue);
          }}
          style={{ color: "#FFF" }}
          selectedValue={currentCountry}
        >
          <Picker.Item value={null} label="Seleziona nazione" />
          {countries.map((country) => (
            <Picker.Item key={country} value={country} label={country} />
          ))}
        </Picker>
      ) : (
        ""
      )}
    </View>
  );
};
