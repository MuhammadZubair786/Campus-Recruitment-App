import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import { GlobalContext } from '../../Config/Store/Context';
import auth from '@react-native-firebase/auth'

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';



import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

export default function DrawerContent(props) {

  const { User } = useContext(GlobalContext)


  const sig_out=()=>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  props.navigation.navigate('Home')

  
  }






  // console.log("Header Screen :",User,User[0].Blood_Group)




  // console.log(blood_group)






  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>

          <View>
            <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdudowHswUnjoR1dyvFy7_e57MXlfxu9j1Q&usqp=CAU' }} style={{ width: '100%', height: 180, marginTop: '-2%' }}>
              <Image
                source={
                  require('../../Images/i1.png')
                }
                style={{ width: 150, height: 90, resizeMode: 'contain', marginTop: '12%' }} />
              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>

                  <View style={{ flexDirection: 'row', marginTop: 30 }}>

                    <View style={{ marginLeft: 25, flexDirection: 'column' }}>
                      <Title style={styles.title}>{User[0].Name}</Title>
                      <Caption style={styles.caption}>{User[0].Email}</Caption>
                      

                    </View>
                  </View>

                </View>

              </View>

            </ImageBackground>
          </View>


          <Drawer.Section style={styles.drawerSection} >
            <DrawerItem

              label="Home"
              onPress={() => { props.navigation.navigate('Main Page') }}
            />

            {User[0].User_Type == "Admin"
              ?
              <>
                <DrawerItem

                  label="Student Data"
                  onPress={() => {props.navigation.navigate("All Std") }}
                />

                <DrawerItem

                  label="Company Data"
                  onPress={() => { props.navigation.navigate("All Company") }}
                />

              </>

              :
              null


            }


            {User[0].User_Type == "Company"
              ?
              <>
                <DrawerItem

                  label="Student Data"
                  onPress={() => {props.navigation.navigate("All Std") }}
                />

               
              </>

              :
              null


            }


{User[0].User_Type == "Student"
              ?
              <>
                <DrawerItem

                  label="Company"
                  onPress={() => {props.navigation.navigate("All Company") }}
                />

               
              </>

              :
              null


            }





            {/* {blood_group == undefined || blood_group == ' ' ?
              <DrawerItem
               
                style={styles.Text}

                onPress={() => { props.navigation.navigate('Register User') }}
                label='Register User '
              />

              :
              <DrawerItem
             
               

                onPress={() => { props.navigation.navigate('Render Data') }}
                label='User Data'

              />
            } */}


            <DrawerItem
              label='Contact'



            />

            <DrawerItem
              label="Profile"
              onPress={() => { props.navigation.navigate('Main Page') }}
            />

            <DrawerItem

              label="Sig Out"
              onPress={() => { sig_out()}}
            />
            {/* <FontAwesome5 name={'comments'} size={100}/> */}








          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => { toggleTheme() }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>

      </Drawer.Section>

    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  Text: {
    fontWeight: 'bold',
    color: 'red'

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '-15%',
    marginLeft: '10%'
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '10%'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,

  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});