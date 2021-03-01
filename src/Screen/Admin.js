import React, { useState ,useContext} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, ImageBackground, StatusBar, TouchableOpacity,Alert } from 'react-native';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { GlobalContext } from '../Config/Store/Context';

const Admin = ({ navigation }) => {

  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const { addCart } = useContext(GlobalContext)

  const sig = () => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Email == '' || Email == undefined) {
        alert("Please Enter Email")
  
      }
      else if (!re.test(Email)) {
        alert("Please Enter Valid Email")
  
      }
      else if (Password == '' || Password == undefined) {
        alert("Please Enter Password")
      }
      else {
  
    
    auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {


          database().ref('/').child('Admin').orderByChild('User_Email').equalTo(Email)
          .once('value')

          
          .then(snapshot => {
            const data11 = snapshot.toJSON()

            if (data11 == null) {

             Alert.alert("You Login As Student Or Company","You Register But Not As A Admin ")

            }
            else{
              const data_key = Object.keys(snapshot.val())
              console.log(data11[data_key]['User_Email'])
              console.log(Email)

              alert("Successfully User  Sig In")
              setEmail('')
              setPassword('')


              const user_Data = {
                Key:data_key,
                Name: data11[data_key]['User_Name'],
                Email: data11[data_key]['User_Email'],
                Password: data11[data_key]['User_Password'],
                User_Code:data11[data_key]['User_Code'],
                User_Type:'Admin'
      
      
              }
      

              addCart(user_Data)

              navigation.navigate('DrawerScreen')
           


            }
          })

          
            
       
          
            // setTimeout(() => {  props.navigation.navigate('Home',{
            //     Email_data:Email,
               
            //   })}, 1000)

           
        })
        .catch(error => {

            if (error.code === 'auth/user-not-found') {
                
                Alert.alert("In_Correct Email", " There is no user record corresponding to this identifier");
            }
            if (error.code === 'auth/wrong-password') {
                Alert.alert("In_Correct Password", " The password is invalid or the user does not have a password!");
               
            }

            // if (error.code === 'auth/invalid-email') {
            //     console.log('That email address is invalid!');
            // }

            console.error(error);
        });
}}





  return (
    <>
      <View style={styles.Main}>
        <ImageBackground style={styles.bgimg} source={{ uri: "https://lh3.googleusercontent.com/proxy/3flZq7kX1DkTO2ajywstS1os-DvN38wlgHh2sgDYv-yxFSHspQgwxfob5EDNsvpVezcyR59E1cRndQ76a-Pp2VfIcmc8QbrKmHt9qDTFFNpdr5ToSZGWnmNozPSE8OAo3j4jtUOZjcDlua16" }}>
          <View style={styles.Head}>
            <Text style={styles.Heading}>Welcome To The Campus </Text>
          </View>
          <View style={styles.body} >

            <Text style={styles.Sig}>Admin Login </Text>






            <TextInput style={styles.textinp} placeholder='Enter Your Email' value={Email} onChangeText={(e) => setEmail(e)} />
            <TextInput style={styles.textinp} placeholder='Enter Your Password' value={Password} onChangeText={(e) => setPassword(e)} />


            <TouchableOpacity style={styles.Tchable} onPress={() => { sig() }} >
              <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Tchable2} >
              <Text style={styles.abt}>
                Donot an Account ?
             <Text style={{ textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('RAdmin') }}>
                  <Text style={{
                    textShadowColor: 'rgb(0, 0, 260)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 30,
                  }}>SignUp</Text></Text>
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


export default Admin;