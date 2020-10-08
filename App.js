import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Picker,
  Alert,
} from "react-native";
import { fetchCountries, fetchData } from "./src/api/fetchData";
import CountriesPicker from "./src/components/Countries";
import Cards from "./src/components/Cards";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState();
  const [dailyData, setDailyData] = useState();

  useEffect(() => {
    const handleData = () => {
      fetchCountries().then((countries) => {
        setCountries(countries);
      });
    };
    handleData();
  }, []);

  useEffect(() => {
    const handleData = () => {
      fetchData(currentCountry).then((data) => {
        setDailyData(data);
      });
    };
    if (currentCountry) handleData();
  }, [currentCountry]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "#FFF" }}>Seelziona nazione</Text>
        {countries.length ? (
          <CountriesPicker
            countries={countries}
            setCountries={setCountries}
            currentCountry={currentCountry}
            setCurrentCountry={setCurrentCountry}
          />
        ) : null}
      </View>
      <View style={styles.status}>
        {dailyData ? <Cards data={dailyData} /> : null}
      </View>
      <View style={styles.charts}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#000",
    flex: 2,
    marginTop: 0,
    color: "#FFF",
    justifyContent: "center",
    //alignItems: "center",
  },
  status: {
    flex: 1.5,
    width: "100%",
    backgroundColor: "red",
  },
  charts: {
    flex: 8,
    width: "100%",
    backgroundColor: "blue",
  },
});
