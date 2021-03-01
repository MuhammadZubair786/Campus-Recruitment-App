import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, ImageBackground, StatusBar, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


const RStudent = ({navigation}) => {

  const [FName, setFName] = useState()
  const [MName, setMName] = useState()
  const [LName, setLName] = useState()
  const [Age, setAge] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [City, setCity] = useState()
  const [Contact, setContact] = useState()
  const [DOB, setDOB] = useState()
  const [University, setUniversity] = useState()
  const [PassingYear, setPassingYear] = useState()
  const [Department, setDepartment] = useState()
  

  const Sig_Up = () =>{
      if(FName == '' || FName == undefined){
          Alert.alert("Empty First Name","Please Enter First Name")
      }
      else if(LName == '' || LName == undefined){
        Alert.alert("Empty First Name","Please Enter First Name")
    }
    else if(Age == '' || Age == undefined){
        Alert.alert("Age Fill","Please Enter Your Age")
    }
    else if(Email == '' || Email == undefined){
        Alert.alert("Empty First Name","Please Enter First Name")
    }
    else if(Password == '' || Password == undefined){
        Alert.alert("Empty Password","Please Enter Password")
    }
   else  if(City == '' || City == undefined){
        Alert.alert("Enter City","Please Enter City Name")
    }

    else if(Contact == '' || Contact == undefined){
        Alert.alert("Enter Contact ","Please Enter Correct Contact Number")
    }

    else {
        
        auth()
      .createUserWithEmailAndPassword(Email, Password, FName)
      .then((data) =>{

        const Student_Data ={
          Email:Email,
         Password:Password,
         First_Name:FName,
         Middle_Name :MName,
        Last_Name :LName,
        Age : Age,
        City : City,
        Contact:City ,
        DOB:DOB,
        Education :{
            University: University,
            PassingYear:PassingYear,
            Department:Department
        } 

        
        }
        database().ref('/').child('Student').push(Student_Data)
        
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
          < ScrollView>
        <ImageBackground style={styles.bgimg} source={{ uri: "https://i.insider.com/5784db8ddd089513168b4944?width=700" }}>
          <View style={styles.Head}>
            <Text style={styles.Heading}>Welcome To The Campus </Text>
          </View>
          <View style={styles.body} >

            <Text style={styles.Sig}>Student Login </Text>


            <TextInput style={styles.textinp} placeholder='Enter First Name' value={FName} onChangeText={(e) => setFName(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Middle Name' value={MName} onChangeText={(e) => setMName(e)} />

            <TextInput style={styles.textinp} placeholder='Enter  Last Name' value={LName} onChangeText={(e) => setLName(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Age' value={Age} onChangeText={(e) => setAge(e)} />

            <TextInput style={styles.textinp} placeholder='Enter Your Email' value={Email} onChangeText={(e) => setEmail(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Your Password' value={Password} onChangeText={(e) => setPassword(e)} />

            <TextInput style={styles.textinp} placeholder='Enter Your City' value={City} onChangeText={(e) => setCity(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Your Contact Number' value={Contact} onChangeText={(e) => setContact(e)} />

            <TextInput style={styles.textinp} placeholder='Enter Date Of Brith' value={DOB} onChangeText={(e) => setDOB(e)} />
            <TextInput style={styles.textinp} placeholder='Enter University' value={University} onChangeText={(e) => setUniversity(e)} />

            <TextInput style={styles.textinp} placeholder='Year Of Passing' value={PassingYear} onChangeText={(e) => setPassingYear(e)} />
            <TextInput style={styles.textinp} placeholder='Department' value={Department} onChangeText={(e) => setDepartment(e)} />


            <TouchableOpacity style={styles.Tchable} onPress={()=>Sig_Up()}>
              <Text style={{ color: 'white', fontSize: 20 }}>Sign Up</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Tchable2}>
              <Text style={styles.abt}>
               Already Register ?
             <Text style={{ textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('Student') }}>
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
    marginTop: 10,
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
    marginTop: 10

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


export default RStudent;