import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import Navigation from './src/Config/Navigation'
import { GlobalProvider } from "./src/Config/Store/Context"



const  App = () =>{
  return(
  <>
  <GlobalProvider>
 <Navigation/>
 </GlobalProvider>
  </>
  )
}

const styles = StyleSheet.create({
 
  
});

export default App;
