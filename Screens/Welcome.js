import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ImageBackground, View, SafeAreaView ,Image,Dimensions} from 'react-native';
import React from 'react';
import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;


 const slideImages = [
    {
      url: '../images/1.jpg',
    },
    {
      url: '../images/2.jpg',
    },
    {
      url: '../images/3.jpg',
    },
    {
        url: '../images/4.jpg',
      },
];

export default function Welcome() {
  return (
    <SafeAreaView style={Styling.container}>
       <ImageBackground  style={{flex:1,width:'100%',}} source={require('../images/3.jpg')}  >   
          <View style={[Styling.container,{position:'absolute', left:Width*.4,top:Hight*.2}]} >   
             <Image style={{width:75,height:75}} source={require('../images/logo300.png')} ></Image>
           </View>
        </ImageBackground>
        <View style={[Styling.overlay,{flex:1,height:Hight,width:Width,backgroundColor:'black',opacity:.4,position:'absolute'}]}></View>
    </SafeAreaView>
  );
}


