import React, { useContext } from 'react'
import { Text, View, Button, Image, TouchableOpacity, ScrollView, ImageBackground,StyleSheet } from 'react-native'
import { GlobalContext } from './../../Config/Store/Context';
import Slid_carousel from './Slid_carousel'
// import Footer from '../Home/Footer'


function Header({ navigation }) {

    const { User } = useContext(GlobalContext)

    console.log(User[0].User_Type)

    // console.log("Main Screen :", User)

    return (
        < View style={{ flex: 1 }}>
            <ScrollView>

                <View style={{ flex: 0, flexDirection: 'row', backgroundColor: '#F9277A' }}>
                    <View style={{ flex: 1, color: 'white' }}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer(); }} >
                            {/* <Text>Click</Text> */}

                            <Image source={require('../../Images/men.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 5, marginTop: 5,height:50 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome TO Campus Recuritment </Text>


                    </View>

                </View>
                <ImageBackground source={{uri:'https://media.glassdoor.com/l/a3/59/8b/93/the-front-side-of-the-spiegel-building.jpg'}} style={{width:'100%',height:650}}>

              

                

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{fontSize:30,color:'red',fontWeight:'bold',textAlign:'center'}}>
                        Welcome To {User[0].User_Type} In A Campus
                    </Text>
                
                </View>

                <View>

                  
              
                </View>

                < View >

                   
                </View>

                </ImageBackground>

              

            </ScrollView>
        </ View>

    )

}

const styles = StyleSheet.create({
    Main: {
      flex: 1
    },
    bgimg: {
      width: '100%',
      height: '100%',
  
    },
    Head: {
      flex: 1,
      padding: 20
  
    },
    Heading: {
      textAlign: 'center',
      fontSize: 30,
      marginTop: 40,
      fontWeight: 'bold',
      textShadowColor: 'rgba(255, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 30
  
    },
    Sig: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 200, 260, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 30,
  
  
    },
    body: {
      flex: 10,
      marginTop: 40
  
    },
    Tchable: {
      backgroundColor: '#F9146E',
      width: '85%',
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 50,
      marginTop: 25,
      padding: 20,
      marginLeft: '6%'
  
  
    },
    Tchable2: {
  
      width: '85%',
      height: 15,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 50,
      marginTop: 25,
      padding: 20,
      marginLeft: '6%'
  
  
    },
    textinp: {
      marginTop: 25,
      marginLeft: 25,
      width: '90%',
      textAlign: 'center',
      borderRadius: 50,
      borderWidth: 1,
      fontWeight: 'bold',
      borderColor: 'gray',
      backgroundColor: 'white'
  
    },
    TextTch: {
      color: 'white',
      fontSize: 25,
      marginTop: '1%',
      paddingLeft: '2%',
      fontFamily: 'Acme',
      fontWeight: 'bold'
    },
  
    abt: {
  
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
  
      textDecorationColor: 'blue'
  
  
  
    },
    abt2: {
      marginTop: 10,
      fontSize: 30,
      color: 'red',
      textAlign: 'center',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
      textDecorationLine: 'underline',
      textDecorationColor: 'blue',
  
  
  
  
    },
    Footer: {
      flex: 2,
  
    }
  
  
  });

export default Header