import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home/Home';
import Admin from '../Screen/Admin';
import RAdmin from '../Screen/RAdmin';
import Student from '../Screen/Student';
import Company from '../Screen/Company';
import RCompany from '../Screen/RCompany';
import RStudent from '../Screen/RStudent';
import Main from '../Components/Main/Main';
import AllStd from '../Components/Student/AllStd'
import AllCompany from '../Components/Company/Allcompany'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../Components/Drawer/DrawerContent'



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function  DrawerScreen (){
  return (
    
      <Drawer.Navigator initialRouteName="Home" drawerContent={props =><DrawerContent {...props} />}>
        
         <Drawer.Screen name="Main Page" component={Main}  />

        <Drawer.Screen name="All Std" component={AllStd}  />

      <Drawer.Screen name="All Company" component={AllCompany}  />

         {/* <Drawer.Screen name="Login Student" component={LStudent}  /> */}

       {/*  <Drawer.Screen name="Get_Data" component={Get_Data}  />

        <Drawer.Screen name="Profile" component={Profile}  />

        <Drawer.Screen name="Specfic_User" component={Specfic_User}  />

        <Drawer.Screen name="Search" component={Search}  />


   
        <Drawer.Screen name="Show" component={Show} /> */}
      </Drawer.Navigator>
    
  );
}


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="RAdmin" component={RAdmin} />
        <Stack.Screen name="RCompany" component={RCompany} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="RStudent" component={RStudent} />
        <Stack.Screen name="Company" component={Company} />

        <Stack.Screen name="DrawerScreen" 
       options={{ headerShown: false }}
        component={DrawerScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation