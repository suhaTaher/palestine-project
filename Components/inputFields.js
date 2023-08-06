import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Dimensions,TextInput} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;





export default function InputFields ({color, text , BWidth ,radius  }) { // recomended radious 45
  const wid=eval(BWidth);
  return (

    <View style={[styles.in,{width:wid*Width,borderRadius:radius, backgroundColor:color,opacity:.3}]}>
        <TextInput  color='yellow' placeholder={text} ></TextInput>
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




