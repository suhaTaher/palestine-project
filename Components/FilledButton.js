import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,Dimensions,TouchableOpacity,Alert} from 'react-native';
import React , {useState}from 'react';

//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;


export default function FilledButton({color, text , BWidth ,radius,BHeight ,Tsize}) { // recomended radious 45

  return (
<TouchableOpacity >
    <View style={[styles.Button,{ width:BWidth,backgroundColor:color,borderRadius:radius,height:BHeight}]}>
        
      <Text style={[styles.Text,{fontSize:Tsize}]}>{text}</Text>
       
    </View>    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 
    Button:{
      textAlign:'center',
      position: 'relative',
      height: 45,
      margin: 15,
      padding: 15,
     
    },
    Buttonhover:{
      textAlign:'center',
      position: 'relative',
      height: 45,
      margin: 15,
      padding: 15,
      opacity:'0.5',
     
    },
    Text:{
      color :'#fff',
      textAlign:'center',
    }

  });