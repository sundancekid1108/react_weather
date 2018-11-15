import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * React Native의 component는 모바일 환경에 따라 Native하게 변화함
 * view component => 모바일 환경 따라 바뀜..
 * 많은 component가 있다.. Doc에서 확인가능
 */

export default class App extends Component {
  //state 작성
  state = {
    isLoaded: false //데이터API 불러오면 True로 바뀜
  } //정보를 받았는지, 안받았는지 알려주는 indicator


  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.loading}>
        {isLoaded ? null : ( 
          <View>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
          </View>)
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
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 100,


  }
});