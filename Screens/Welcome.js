import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ImageBackground, View, SafeAreaView ,Image,Dimensions} from 'react-native';
import React from 'react';

//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';
import TimedSlideshow from 'react-native-timed-slideshow';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;


 const slideImages = [
    {
      url: '../images/1.jpg',
    },
    {
        url: '../images/2.jpg',
      duration: 300
    },
    {
      url: '../images/3.jpg',
      duration: 300
    },
    {
        url: '../images/4.jpg',
        duration: 300
      },
];

export default function Welcome({items}) {
  return (
    <SafeAreaView style={Styling.container}>
        <Text style={{color:'yellow'}}>suha</Text>
       <ImageBackground source={require('../images/1.jpg')}  resizeMode='cover'  style={[Styling.Image,{flex:1,width:'100%',position:'absolute',borderColor:'yellow'}]}   > 
          
          <View style={[Styling.container,{position:'absolute', left:Width*.4,top:Hight*.2}]} >   
             <Image style={{width:75,height:75}} source={require('../images/logo300.png')} ></Image>
             {/*<TimedSlideshow items={items} />*/}
           </View>
        </ImageBackground>
        <View style={[Styling.overlay,{flex:1,height:Hight,width:Width,backgroundColor:'black',opacity:.4,position:'absolute'}]}></View>
    </SafeAreaView>
  );
}


