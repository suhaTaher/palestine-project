import React , {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ImageBackground,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import FButton from '../Components/FilledButton';

export default function Signin() {

  const [email, onChangeEmail] = useState('email');
  const [password, onChangePassword] = useState('password');

 
  return (
    <View style={styles.container}>
   <ImageBackground source={require('../images/5.jpg')} resizeMode="cover" style={styles.image}>
   <View style={styles.container2}>
      <Text style={styles.text}>welcome back</Text>
      <Text style={styles.sign}>Sign In</Text>
      <TextInput style={styles.input} placeholder='email' onChangeText={onChangeEmail} value={email}/>
       <TextInput style={styles.input} placeholder='password' onChangeText={onChangePassword} value={password}/>
    <FButton color={"#E35601"} text={"Sign In"}  BWidth={"94%"} radius={45} BHeight={45} Tsize={13}/>
       
       <Text  style={styles.fp} >forgot password</Text>
       </View>
      
    </ImageBackground>
  
    <View style={styles.icon} >
    <TouchableOpacity>
   <AntDesign  name="left" size={45} color="white"  />
   </TouchableOpacity>
   </View>
  
    </View>
  
  );
}

const styles = StyleSheet.create({
  icon:{
    marginTop:40,
    marginLeft:10,
    padding:5,
    position: 'absolute',
  },
    container: {
      flex: 1,
    position:'relative',

    },
    container2: {
        padding:'9%',
        justifyContent: 'center',
        
      },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: '#E35601',
        fontSize: 55,
        fontWeight:'400',
        textAlign: 'center'
      },
      fp: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'400',
      },
      sign: {
        color: 'white',
        fontSize: 40,
        letterSpacing:0,
        lineHeight:40,
        fontWeight:'400',
        fontFamily:'Gabriela',
        textAlign: 'center'
      },
      input: {
        height: 45,
        margin: 12,
        padding: 20,
        backgroundColor:'#CDCDCD',
        opacity:'0.5',
        color:'white',
        borderRadius:25,
      },

  });

