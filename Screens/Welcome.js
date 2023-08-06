import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ImageBackground, View, SafeAreaView ,Image,Dimensions,ScrollView,Image} from 'react-native';
import React from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';
import TimedSlideshow from 'react-native-timed-slideshow';
import WordingButton from '../Components/WordingButton';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Hight=Dimensions.get('window').height;

const note='Contrary to popular belief, Lorem ';
const note2='Ipsum is not simply';



export default function Welcome({items}) {
    useEffect(() => {
                let scrollValue = 0;
        setInterval(function(){
          scrollValue = scrollValue + width;   // width = screen width 
          _scrollView.scrollTo({x: scrollValue}) 
        }, 3000);
      })


  return (
     <SafeAreaView style={Styling.container}>
        <ImageBackground 
        source={require('../images/2.jpg')} 
        resizeMode={'cover'} 
        style={{flex:1,width:'100%'}}   > 
            </ImageBackground>
            
            <View style={[Styling.overlay,{flex:1,height:Hight,width:Width,backgroundColor:'black',opacity:.4,position:'absolute'}]}></View>
            <View style={[Styling.container,{position:'absolute', }]} >   
                <Image style={{width:75,height:75,left:Width*.4,top:Hight*.21}} source={require('../images/logo300.png')} ></Image>
                <View style={{alignItems:'center',width:Width,top:Hight*.3}}>
                    <Text style={{fontSize:35,color:'white' }}>Explore</Text>
                    <Text style={{fontSize:40, color:'#13E301',top:-15}} >Palestine</Text>
                    <View Style={{backgroundColor:'red'}}>
                    <Text style={{color:'white',textAlign:'center',marginTop:20}}>{note}</Text>
                    <Text style={{color:'white',textAlign:'center',}}>{note2}</Text>
                    </View>
                    <View style={{marginTop:110 }}>
                        <WordingButton colors={'#E35601'}  FontSize1={'30'} text={'Get Started..'} />
                    </View>
                    
                </View>
                {/*<TimedSlideshow items={items} />*/}
                </View>
    
  </SafeAreaView>



  );
}
