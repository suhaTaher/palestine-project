import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilledButton from './Components/FilledButton';
import BorderedButton from './Components/BorderedButton';
import Welcome from './Screens/Welcome';
import Onboarding from './Screens/Onboarding.js';
import InputFields from './Components/InputFields';
const slideImages = [
  {
    url: '../images/1.jpg',
  },
  {
      url: '../images/2.jpg',
    duration: 3000
  },
  {
    url: '../images/3.jpg',
    duration: 3000
  },
  {
      url: '../images/4.jpg',
      duration: 3000
    },
];

export default function App() {
  return (
    <View style={styles.container}>
     { /*<BorderedButton ColorBorder={'#E35601'} text={'login'} BWidth={'0.5'} radius={45} BackColor={'white'}/>*/}
     {/*<FilledButton color={'#E35601'} text={'login'} BWidth={'0.5'} radius={45} />*/}
     {/*<Onboarding />*/}
     <InputFields color={'black'} text={'login'} BWidth={'0.5'} radius={45}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'left',
    

  },
});
