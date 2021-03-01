import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'

const RAdmin = ({navigation}) => {

  const [User_Email, setEmail] = useState()
  const [User_Password, setPassword] = useState()
  const [User_Name,setName] = useState()
  const [User_Code,setCode] = useState()

  const sig_in = () => {

    console.log(User_Email, User_Password,User_Name)

    if(User_Name == '' || User_Name == undefined){
      alert("Please Enter Your Name")
    }

    else if(User_Email =='' || User_Email == undefined){
      alert("Please Enter Your Email")

    }

    else if(User_Password =='' || User_Password == undefined){
      alert("Please Enter Your password")

    }

    else if(User_Code != 12345 ){
      alert("Please Enter Correct Admin Code")

    }

    else {


      auth()
      .createUserWithEmailAndPassword(User_Email, User_Password, User_Name)
      .then((data) =>{

        const Admin_Data ={
          User_Name:User_Name,
          User_Email:User_Email,
          User_Password:User_Password,
          User_Code : User_Code
        
        }
        database().ref('/').child('Admin').push(Admin_Data)
        
      } )

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        console.error(error);

      });
    
  
    

  }
  }




  return (
    <>
      <View style={styles.Main}>
        <ImageBackground style={styles.bgimg} source={{ uri: "https://lh3.googleusercontent.com/proxy/3flZq7kX1DkTO2ajywstS1os-DvN38wlgHh2sgDYv-yxFSHspQgwxfob5EDNsvpVezcyR59E1cRndQ76a-Pp2VfIcmc8QbrKmHt9qDTFFNpdr5ToSZGWnmNozPSE8OAo3j4jtUOZjcDlua16" }}>
          <View style={styles.Head}>
            <Text style={styles.Heading}>Welcome To The Campus </Text>
          </View>
          <View style={styles.body} >

            <Text style={styles.Sig}>Admin Registration </Text>





            <TextInput style={styles.textinp} placeholder='Enter Your Name' value={User_Name} onChangeText={(e) => setName(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Your Email' value={User_Email} onChangeText={(e) => setEmail(e)}/>
            <TextInput style={styles.textinp} placeholder='Enter Your Password' value={User_Password} onChangeText={(e) => setPassword(e)} />
            <TextInput style={styles.textinp} placeholder='If You Admin Then Enter Code' value={User_Code} onChangeText={(e) => setCode(e)} />


            <TouchableOpacity style={styles.Tchable} onPress={()=>{sig_in()}} >
              <Text style={{ color: 'white', fontSize: 20 }}>Sign Up</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Tchable2}>
              <Text style={styles.abt}>
                Already Register ?
             <Text style={{ textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('Admin') }}>
                  <Text style={{
                    textShadowColor: 'rgb(0, 0, 260)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 30,
                  }}>Sign In</Text></Text>
              </Text>
            </TouchableOpacity>


          </View>
          <View style={styles.Footer}>
           

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
    marginTop: 20,
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
    marginTop: 20

  },
  Tchable: {
    backgroundColor: '#F9146E',
    width: '85%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 15,
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


export default RAdmin;