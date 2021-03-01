import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


const Company = ({navigation}) => {

  const [Company,setCompany] = useState()
  const[Establish,setEstablish] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [HR_Name,setHR_Name] = useState()
  const [Contact,setContact] = useState()


  const sig_in = () =>{

    if(Company == "" || Company == undefined){
      alert("Enter Company Name")
    }
    else if(Establish == "" || Establish == undefined){
      alert("Enter Establish Date")
    }
    else if(Email == "" || Email == undefined){
      alert("Enter Company Email") 
      
    }

    else if(Password == "" || Password == undefined){
      alert("Enter Company Password")    
    }

    else if(HR_Name == "" || HR_Name == undefined){
      alert("Enter HR Name")

      
    }
    else if(Contact == "" || Contact == undefined){
      alert("Enter Company Contact Number")

      
    }

    else {
      auth()
      .createUserWithEmailAndPassword(Email, Password, Company)
      .then((data) =>{

        const Company_Data ={
          Company_Email:Email,
          Company_Password:Password,
          Company_Name:Company,
          Establish_Date : Establish,
          HR_Name : HR_Name,
          Company_Conatct : Contact,

        
        }
        database().ref('/').child('Company').push(Company_Data)
        
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
        <ScrollView>
        <ImageBackground style={styles.bgimg} source={{ uri: "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXB1c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}>
          <View style={styles.Head}>
            <Text style={styles.Heading}>Welcome To The Campus </Text>
          </View>
          <View style={styles.body} >


            <Text style={styles.Sig}>Company Registration </Text>

            <TextInput style={styles.textinp} placeholder='Enter Company Name' value={Company} onChangeText={(e) => setCompany(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Establish Date' value={Establish} onChangeText={(e) => setEstablish(e)} />

            
            <TextInput style={styles.textinp} placeholder='Enter Comapny Email' value={Email} onChangeText={(e) => setEmail(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Company Password' value={Password} onChangeText={(e) => setPassword(e)} />

            <TextInput style={styles.textinp} placeholder='Enter Company HR Name' value={HR_Name} onChangeText={(e) => setHR_Name(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Company Contact Number' value={Contact} onChangeText={(e) => setContact(e)} />


            <TouchableOpacity style={styles.Tchable} onPress={()=>{sig_in()}}>
              <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Tchable2}>
              <Text style={styles.abt}>
                Already Register ?
             <Text style={{ textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('Company') }}>
                  <Text style={{
                    textShadowColor: 'rgb(0, 0, 260)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 30,
                  }}>SignIn</Text></Text>
              </Text>
            </TouchableOpacity>


          </View>
          <View style={styles.Footer}>
           

          </View>
        </ImageBackground>
        </ScrollView>
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
    marginTop: 0,
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
    marginTop: 0

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


export default Company;