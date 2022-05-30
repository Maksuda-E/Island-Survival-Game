import React from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './GameScreen';
import { useFonts } from 'expo-font';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



function WelcomeScreen({navigation}){
  const [loaded] = useFonts({
    Malizia: require('./assets/fonts/Malizia.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return(
    <View>
      <ImageBackground source={ require('./assets/images/island.webp') } 
      style={styles.background} >
      <Text style={styles.maintitle}>Welcome To</Text>
       <Text style={styles.title}>Survival Island{"\n"}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Game Screen")}>
        <Text style={styles.buttonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footertext}>Developed By Maksuda-E Elahi</Text>
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutename=" ">
      <Stack.Screen options={{headerShown:false}} name=" " component={WelcomeScreen}/>
      <Stack.Screen options={{headerShown:false}} name="Game Screen" component={GameScreen}/>
    </Stack.Navigator>
      </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  maintitle: {
    fontSize: 30,
    color: '#00008b',
    textAlign: 'center',
    fontWeight: '200',
    paddingTop: 250,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Malizia',
    fontSize: 70,
    textAlign: 'center',
    color: '#fffaf0',
  },
  buttonContainer:{
    width: "75%",
    paddingLeft: 105,
    marginTop: -50,
   },
   button:{
     backgroundColor:"#8b0000",
     padding: 15,
     borderRadius: 20,
     alignItems:"center",
     borderWidth: 1,
     borderColor: "white",
   },
   buttonText:{
    color:"white",
    fontWeight: 'bold',
    fontSize: 25,
   },
   footertext:{
     color: "#00008b",
     marginTop: 70,
     fontSize: 18,
     textAlign:"center",
   }

});
