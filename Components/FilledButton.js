import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, View, Button,Dimensions} from 'react-native';
import React from 'react';
=======
import { StyleSheet, View, TouchableOpacity,Dimensions,Text} from 'react-native';
import React from 'react';


>>>>>>> Stashed changes
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;





<<<<<<< Updated upstream
export default function FilledButton({color, text , BWidth ,radius  }) { // recomended radious 45
  const wid=eval(BWidth);
  return (

    <View style={[styles.Button,{width:wid*Width,borderRadius:radius, backgroundColor:color}]}>
        <Button color='white' title={text} ></Button>
    </View>    
=======
export default function FilledButton({color, text , BWidth ,radius ,Tsize  }) { // recomended radious 45
  const wid=eval(BWidth);
  return (

<TouchableOpacity style={{margin:5}}>
    <View style={[styles.Button,{ width:wid*Width,backgroundColor:color,borderRadius:radius }]}>
        
      <Text style={[styles.bText,{fontSize:Tsize}]}>{text}</Text>
       
    </View>    
    </TouchableOpacity> 
>>>>>>> Stashed changes
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    Button:{
<<<<<<< Updated upstream
      padding:5,
      position:'absolute'
    
=======
      padding:10,

    
    },
    bText:{
      color :'#fff',
      textAlign:'center',
>>>>>>> Stashed changes
    }


  });




