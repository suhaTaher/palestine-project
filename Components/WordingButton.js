import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,Dimensions,Text} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;


export default function WordingButton({colors, text   ,FontSize1 }) { // recomended radious 45
    const FSize=eval(FontSize1);

  return (
    
    <View style={{padding:10}} >
         <Text style={{fontSize:FSize,color:colors }}>{text}</Text>
    </View>    
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    


  });




