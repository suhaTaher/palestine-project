import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

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

  });