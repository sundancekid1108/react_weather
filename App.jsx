import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather"
/**
 * React Native의 component는 모바일 환경에 따라 Native하게 변화함
 * view component => 모바일 환경 따라 바뀜..
 * 많은 component가 있다.. Doc에서 확인가능
 * 
 * Javascript의 navigator에서 위치정보 찾기 가능
 * navigator.geolocation.getCurrentPosition()
 */

const API_KEY = "b6884a2584190f6c6af49767e42fcd37";

export default class App extends Component {
  //state 작성
  state = {
    isLoaded: false, //데이터API 불러오면 True로 바뀜
    error: null,
    temperature: null,
    name: null
  } //정보를 받았는지, 안받았는지 알려주는 indicator


  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
        this.setState({
          isLoaded: true
        }); //위치정보를 받으면 isLoaded를 true로 바꾸고 날씨를 받아옴..
      },
      error => {
        this.setState({
          error: 'something is wrong'
        });  // 못받으면 에러..
      }
    );
  }

_getWeather= (lat, long) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+API_KEY)
    .then(response => response.json())
    .then(json => {
      console.log("!!json.weather[0].main : "+ json.weather[0].main);
    
      this.setState({
        temperature : json.main.temp,
        name :  json.weather[0].main,
        isLoaded: true
      });
      console.log("1. json.weather[0].main : "  + json.weather[0].main);
      console.log("1. weather_name : " + weather_name);
      
    });
  }


 
  //콘솔에서 위치 날짜

  render() {
    const {isLoaded, error, name, temperature } = this.state; //isLoaded, error 2개 받음
    console.log("2. weather_name : " + name);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? (
          <Weather
             weatherName= {name}
            temp={Math.ceil(temperature - 273.15)}
          />
        ) : ( 
          <View style={styles.loading}> 
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style= {styles.errorText}>{error}</Text> : null}
            
          </View>
          )
        }
        
      </View>
    );
  }
}





//sytles object
//flexbox로 layout 설정(스크린 전체를 어떤 비율로 나눌지..)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  
  },
  errorText:{
    color: "red",
    backgroundColor: "transparent",
    marginLeft: 30,
    marginBottom: 40

  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 60,
    marginLeft: 30


  }
});