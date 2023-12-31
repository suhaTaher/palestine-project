import React , {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ImageBackground ,Image,Alert,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import FButton from '../Components/FilledButton';

export default function LogIn() {

  const [email, onChangeEmail] = useState('email');
  const [password, onChangePassword] = useState('password');


  return (
    <View style={styles.container}>
   <ImageBackground source={require('../images/5.jpg')} resizeMode="cover" style={styles.image}>
   <View style={styles.container2}>
   <View style={styles.logocon}>
    <Image source={require('../images/logo300.png')} style={styles.logo} ></Image>
    </View>
      <Text style={styles.text}>here is palestine</Text>
      <Text style={styles.text}>the holy land</Text>

      <Text style={styles.login}>Log In</Text>

      <TouchableOpacity >
    <View style={[styles.Button,{ width:300,backgroundColor:'#CDCDCD',borderRadius:50,height:65}]}>
        
      <Text style={[styles.Btext,{fontSize:25}]}>Local guid</Text>
       
    </View>    
    </TouchableOpacity>
      
      <FButton color={"#E35601"} text={"Tourist"}  BWidth={300} radius={50} BHeight={65} Tsize={25} />
       
       <Text  style={styles.fp} >sign up as a Local Guid</Text>
       </View>
      
    </ImageBackground>
  
    </View>
  
  );
}

const styles = StyleSheet.create({
  Btext:{
    color :'#fff',
    textAlign:'center',
  },
  logocon:{
    paddingTop: 50,
    justifyContent:'center',
  },
  logo:{
    width: 71,
    height: 43,
    alignSelf: 'center',
    padding:'10%',
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
        color: 'white',
        fontSize: 25,
        fontWeight:'400',
        textAlign: 'center'
      },
      fp: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'400',
      },
      login: {
        color:'white',
        fontSize: 50,
        margin:'10%',
        fontWeight:'400',
        fontFamily:'Gabriela',
        textAlign: 'center',
        lineHeight:64.05
      },
          Button:{
      textAlign:'center',
      position: 'relative',
      height: 45,
      margin: 15,
      padding: 15,
      borderColor:'#E35601',
      borderWidth:1.5,
      color:'#E35601',
     
    },

  });

