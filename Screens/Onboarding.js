import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ImageBackground, View, SafeAreaView ,Dimensions,ScrollView,Image} from 'react-native';
import {React, useEffect} from 'react';
//import 'react-slideshow-image/dist/styles.css'
import Styling from '../Styling';
import TimedSlideshow from 'react-native-timed-slideshow';
import WordingButton from '../Components/WordingButton';

//var Dimentions =require('Dimentions');
const Width=Dimensions.get('window').width;
const Height=Dimensions.get('window').height;

const note='Contrary to popular belief, Lorem ';
const note2='Ipsum is not simply';



export default function Onboarding() {
  let scrollValue = 0;
    useEffect(() => {
         
          setInterval(function(){
          scrollValue = scrollValue + Width;   // width = screen width 
          _scrollView.scrollTo({x: scrollValue}) 
          if(scrollValue==Width*5){
            scrollValue=scrollValue-Width;
          }

        }, 3500);
      })


  return (
    <View >
               <ScrollView style={{height:'100%',flex:1}}
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true} pagingEnabled={true} alwaysBounceHorizontal={false} sho
        >

          <Image source={require('../images/1.jpg')} style={{height:'100%',width:Width}}/>
          <Image source={require('../images/2.jpg')} style={{height:'100%',width:Width}}/>
          <Image source={require('../images/3.jpg')} style={{height:'100%',width:Width}}/>
          <Image source={require('../images/4.jpg')} style={{height:'100%',width:Width}}/>
          <Image source={require('../images/1.jpg')} style={{height:'100%',width:Width}}/>

       </ScrollView>

       {/*<View style={[Styling.overlay,{flex:1,height:Height,width:Width,backgroundColor:'black',opacity:.4,position:'absolute'}]}></View>*/}
            <View style={[Styling.container,{position:'absolute', }]} >   
                <Image style={{width:75,height:75,left:Width*.4,top:Height*.21}} source={require('../images/logo300.png')} ></Image>
                <View style={{alignItems:'center',width:Width,top:Height*.3}}>
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




    </View>



  );
}
