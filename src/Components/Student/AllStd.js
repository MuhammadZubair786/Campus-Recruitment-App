import React, { useState ,useContext, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Image,ScrollView, TextInput, View, Text, ImageBackground, StatusBar, TouchableOpacity,Alert } from 'react-native';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { GlobalContext } from '../../Config/Store/Context';


function  AllStd({navigation}) {

    const {User} = useContext(GlobalContext)
    const [data, setdata] = useState([])

    

    useEffect(()=>{
        database().ref('/').child('Student').once('value', (snapshot) => {

            const data11 = snapshot.toJSON()
            const value = Object.values(data11)

            setdata(Object.values(data11))
        })
    }, [])

    // console.log("DATA =",data[0].Education.Department)

    return(
        <>
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

               

                <View style={{backgroundColor:'white'}}>
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{fontSize:30,color:'red',fontWeight:'bold',textAlign:'center'}}>
                       Student Data
                    </Text>
                
                </View>
              
                  {data.map((v,i)=>{
                    return(   <View  style={{marginLeft:10,marginRight:10}} key={i}>
                      <View style={{marginTop:'8%',padding:'2%',borderWidth:2,borderColor:'#C2C1C0',backgroundColor:'#F2EDE4',borderRadius:20}} >
                          <View style={{flexDirection:'row'}}>

                      <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}} style={{ width: 50, height: 70 ,borderRadius:30}} />
                      <Text style={{fontSize:30,marginLeft:'2%',color:'black'}} >{v.First_Name}</Text>
                     
                     </View>
                    
                      <View>
                      <View style={{padding:'1%',marginLeft:'5%'}}>
                          <Text style={{fontSize:20,fontWeight:'bold'}}>Email : {v.Email}
                          </Text>
                      </View>

                      <View style={{padding:'1%',marginLeft:'5%'}}>
                          <Text style={{fontSize:20,fontWeight:'bold'}}>Age : {v.Age}
                          </Text>
                      </View>

                      <View>
                      <View style={{padding:'1%',marginLeft:'5%'}}>
                          <Text style={{fontSize:20,fontWeight:'bold'}}>Education :
                          {v.Education.University ?
                          
                          ' Bachleor':
                          'Intermediate'} 
                          </Text>
                      </View>

                      {v.Education.University   ?
                       <View style={{padding:'1%',marginLeft:'5%'}}>
                       <Text style={{fontSize:20,fontWeight:'bold'}}>University : {v.Education.University}
                       </Text>
                       <Text style={{fontSize:20,fontWeight:'bold'}}>Passing Year : {v.Education.PassingYear}
                       </Text>
                   </View>
                   :
                   null
                      }

                     
                        </View>

                      <View style={{padding:'1%',marginLeft:'5%'}}>
                          <Text style={{fontSize:20,fontWeight:'bold'}}>Mobile No : {v.Contact}
                          </Text>
                      </View>
                   

                    <View style={{display:'flex',flexDirection:'row'}}>
                      <TouchableOpacity style={styles.Tchable} >
                  <Text style={{ color: 'white', fontSize: 15 }}>Call</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Tchable} >
                  <Text style={{ color: 'white', fontSize: 15 }}>Sms</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Tchable} >
                  <Text style={{ color: 'white', fontSize: 15 }}>Delete</Text>
              </TouchableOpacity>
              </View>
             
                          <Text >
                          </Text>
                    
                        
                      </View>
                      </View>
                      </View>
                 
             
          )
                   })}
                </View>

               

               

               

                </ImageBackground>

              

            </ScrollView>
        </ View>
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
      backgroundColor: '#F91448',
      width: '30%',
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 50,
      marginTop: 25,
      padding: 10,
      marginLeft: '3%'
  
  
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

export default AllStd