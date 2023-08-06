import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,Dimensions} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;





export default function BorderedButton({ColorBorder, text , BWidth ,radius , BackColor }) { // recomended radious 45
  const wid=eval(BWidth);
  return (

    <View style={[styles.Button,{width:wid*Width,borderRadius:radius, borderColor:ColorBorder,borderWidth:1,backgroundColor:BackColor}]}>
        <Button color={ColorBorder} title={text} ></Button>
    </View>    
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    Button:{
      padding:5,
      position:'absolute',
      opacity:.53
    }


  });