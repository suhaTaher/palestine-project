import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      borderColor:'red',

    },
    image: {
       flex:1,
       resizeMode:"cover",

      },
    overlay: {
        flex:1,
        position:'absolute',
        left:0,
        top:0,
        opacity:0.5,
        backgroundColor:'red',
    },
    borders: {
        borderStyle:'dashed',
        borderColor:'red'
    },
    textstyle: {

    }

  });