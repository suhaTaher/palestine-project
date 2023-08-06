import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, inputField,Dimensions} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;





export default function inputFields ({color, text , BWidth ,radius  }) { // recomended radious 45
  const wid=eval(BWidth);
  return (

    <View style={[styles.in,{width:wid*Width,borderRadius:radius, backgroundColor:color,opacity:.5}]}>
        <inputField color='white' title={text} ></inputField>
    </View>    
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    in:{
      padding:5,
      position:'absolute'
    
    }


  });




