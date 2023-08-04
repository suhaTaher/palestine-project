import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Screens/Welcome';
import FilledButton from './Components/FilledButton';
import BorderedButton from './Components/BorderedButton';

export default function App() {
  return (
    <View style={styles.container}>
      < BorderedButton ColorBorder={'#E35601'} text={'login'} BWidth={'0.5'} radius={'45'} BackColor={'#FFFFFF'} />
      {/*< FilledButton color={'#E35601'} text={'login'} BWidth={'0.5'} radius={'45'}/>*/}
      {/*<Welcome/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'left',
  },
});
