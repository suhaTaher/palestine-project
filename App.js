import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './screens/signin'
import LogIn from './screens/login'
import Tourist from './screens/tourist'
export default function App() {
  return (

     <Tourist/> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
