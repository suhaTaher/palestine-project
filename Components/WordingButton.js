import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,Dimensions,Text,TouchableOpacity} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

const BWidth=Dimensions.get('window').width;
const BHeight=Dimensions.get('window').height;


export default function WordingButton({colors, text   ,FontSize1 }) { // recomended radious 45
    const FSize=eval(FontSize1);

  return (
    

<TouchableOpacity style={{padding:10}}  >
    <View style={[styles.Button,{opacity:1}]}>
        
    <Text style={{fontSize:FSize,color:colors }}>{text}</Text>
      
       
    </View>    
    </TouchableOpacity>

   
  );
}

const styles = StyleSheet.create({
    container: {
  flex:1,
      backgroundColor: '#fff',
    },

    


  });




