import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text,ImageBackground ,StatusBar, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.Main}>
        <ImageBackground style={styles.bgimg} source={{uri:"https://c1.wallpaperflare.com/preview/870/611/783/university-old-building-campus-college.jpg"}}>
        <View style={styles.Head}>
          <Text style={styles.Heading}>Welcome To The Campus </Text>
        </View>
        <View style={styles.body} >
          <TouchableOpacity style={styles.Tchable} activeOpacity={0.5}  onPress={()=>{navigation.navigate("Company")}}>
            <Text style={styles.TextTch}>
              Company Login
        </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.Tchable} activeOpacity={0.5}  onPress={()=>{navigation.navigate("Student")}}>
            <Text style={styles.TextTch}>
              Student Login
        </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.Tchable} activeOpacity={0.5} onPress={()=>{navigation.navigate("Admin")}}>
            <Text style={styles.TextTch}>
              Admin Login
        </Text>
          </TouchableOpacity>


          <TouchableOpacity >
            <Text  style={styles.abt}>
             About
        </Text>
          </TouchableOpacity>


          <TouchableOpacity >
            <Text  style={styles.abt2}>
             FAQ
        </Text>
          </TouchableOpacity>



        </View>
        <View style={styles.Footer}>
          <Text>Head</Text>

        </View>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 1
  },
  bgimg  :{
    width:'100%',
    height:'100%'
  },
  Head: {
    flex: 1,
    padding: 20

  },
  Heading: {
       textAlign: 'center',
    fontSize: 30,
    marginTop: 90,
    fontWeight:'bold',
    textShadowColor: 'rgba(255, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30

  },
  body: {
    flex: 10,
    marginTop:80

  },
  Tchable : {
    backgroundColor: '#F9146E',
    width: '85%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop:25,
    padding:20,
    marginLeft:'6%'


  },
  TextTch : {
    color: 'white',
    fontSize: 25,
    marginTop: '1%',
    paddingLeft: '2%',
    fontFamily:'Acme',
    fontWeight:'bold'
  },

  abt : {
    marginTop:30,
    fontSize:30,
    color:'red',
    textAlign:'center',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    textDecorationLine:'underline',
    textDecorationColor:'blue'

    

  },
  abt2 : {
    marginTop:10,
    fontSize:30,
    color:'red',
    textAlign:'center',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    textDecorationLine:'underline',
    textDecorationColor:'blue',
  

    

  },
  Footer: {
    flex: 2,

  }


});

export default Home;