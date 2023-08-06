import React , {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ImageBackground ,Image,Alert,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from './signin'
import LogIn from './login'
const Tab = createBottomTabNavigator();

export default function Tourist() {
  return (
    <View style={styles.container}> 
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Signin} />
        <Tab.Screen name="Settings" component={LogIn} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
