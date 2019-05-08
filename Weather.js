
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import {Ionicons} from "@expo/vector-icons" // expo에 있는 IconLibrary.. fontawesome도 찾아보자
import App from "./App"

const weatherCases = {
    Rain: {
        colors:["#00c6FB", "#005BEA"],
        title: "Raining",
        subtitle: "Under My Umbrella",
        icon: "weather-rainy" 
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Have a good day",
        icon: "weather-sunny" 
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunder!!!!",
        subtitle: "better watch out",
        icon: "weather-lightning"
    },
    Clouds: {
        colors:["#D7D2CC", "#334352"],
        title: "Clouds",
        subtitle: "It's boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "It's snowing outside",
        subtitle: "Let it snow",
        icon: "weather-snowy" 
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Shitty day",
        icon: "weather-hail" 
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is 💩",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    },
    Smoke: {
        colors: ["#D7D2CC", "#304352"],
        title: "Smoke",
        subtitle: "Air pollution!!",
        icon: "weather-fog"
    },
};







function Weather({ weatherName, temp }) {
    console.log("Weather.js weatherName : " + weatherName);
    console.log("Weather.js temp : " + temp);
    return (
      <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}
      >
        <View style={styles.upper}>
          <MaterialCommunityIcons
            color="white"
            size={144}
            name={weatherCases[weatherName].icon}
          />
          <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>
            {weatherCases[weatherName].subtitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }

Weather.propTypes = {

    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};
  
export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp:{
        fontSize: 40,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
        
    },
    upper:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    lower:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25

    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 5,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 25
    }

});