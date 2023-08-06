import React , {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ImageBackground ,Image,Alert,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import FButton from '../Components/FilledButton';
import BorderedButton from '../Components/BorderedButton';
import WordingButton from '../Components/WordingButton';
export default function LogIn() {

  const [email, onChangeEmail] = useState('email');
  const [password, onChangePassword] = useState('password');


  return (
    <View style={styles.container}>
   <ImageBackground source={require('../images/5.jpg')} resizeMode="cover" style={styles.image}>

   <View style={styles.containerr}>

   <View style={styles.logocon}>
    <Image source={require('../images/logo300.png')} style={styles.logo} ></Image>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={styles.text}>here is palestine</Text>
      <Text style={styles.text}>the holy land</Text>

      <Text style={styles.login}>Log In</Text>
      </View>

      <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        
    <BorderedButton ColorBorder={"#E35601"} text={"Local Guid"} BWidth={.75} radius={45} BackColor={'#CDCDCD'}/>
      
    <FButton color={"#E35601"} text={"Tourist"}  BWidth={.75} radius={45}  Tsize={20} />
    <WordingButton colors={'white'} text={'sign up as a Local Guid'} fontSize={10} />
   

      </View>

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
    containerr: {
        paddingTop:'28%',
        flex:1
        
      },
    image: {
        flex: 1,
      },
      text: {
        color: 'white',
        fontSize: 25,
        fontWeight:'320',
        textAlign: 'center'
      },
      fp: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'400',
        paddingTop:10
      },
      login: {
        color:'white',
        fontSize: 40,
        margin:'6%',
        fontWeight:'350',
        fontFamily:'Gabriela',
        textAlign: 'center',
        lineHeight:64.05
      },

     


  });