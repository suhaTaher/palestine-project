import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,Dimensions} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;





export default function WordButton({color, text   ,FontSize }) { // recomended radious 45
    const FSize=eval(FontSize);
  return (
    
    <View style={styles.Button}>
        <Button color={color} title={text} FontSize={FSize}></Button>
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
      position:'absolute'
    
    }


  });




