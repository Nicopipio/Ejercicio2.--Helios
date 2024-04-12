import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer} from "@react-navigation/native";

// Icons
import { Ionicons } from '@expo/vector-icons';

// Vistas
import Helios from "./screens/Helios"; 
import Sistema from "./screens/Sistema";
import Tierra from "./screens/Tierra";
import Sol from "./screens/Sol"; 


const Tab = createBottomTabNavigator();


function MyTabs () {

    return(

                
        <Tab.Navigator
        initialRouteName="Helios"
        screenOptions={{
            style: { marginBottom: 50 },
            tabBarActiveTintColor: '#E0B02C',
            tabBarStyle: {
                backgroundColor: '#000000', 
            },
        }}
    >
            <Tab.Screen 
            name="Helios"
            component={Helios}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size}) =>(
                <Ionicons name="home-outline" size={size} color={color} />
               ),
                headerShown: false,         
              
            }}

            />

            <Tab.Screen 
            name="Sistema solar" 
            component={Sistema}
            options={{
                tabBarLabel: 'Sistema',
                tabBarIcon: ({color, size}) => (
                <Ionicons name="star-outline" size={size} color={color} />
                ),
                headerShown: false, 
                headerTransparent: true, 
                headerStyle: {
                backgroundColor: 'transparent', 
                },
                headerTintColor: 'white', 
            }}
            />
            
            <Tab.Screen 
                name="Sol"
                component={Sol}
                options={{
                    tabBarLabel: 'Sol',
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name="sunny-outline" size={size} color={color} />     
                    ), 
                    headerShown: true, 
                    headerTransparent: true, 
                    headerStyle: {
                    backgroundColor: 'transparent', 
                    },
                    headerTintColor: 'white',       

            }}
            />

            <Tab.Screen 
            name="Tierra"
            component={Tierra}
            options={{
                tabBarLabel: 'Tierra',
                tabBarIcon: ({color, size}) =>(
                    <Ionicons name="planet-outline"size={size} color={color} />
                ),   
                headerShown: true, 
                    headerTransparent: true, 
                    headerStyle: {
                    backgroundColor: 'transparent', 
                    },
                    headerTintColor: 'white',    

            }}
             />

           

        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}