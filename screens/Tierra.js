import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ListaTierra from "./ListaTierra";

const Stack = createStackNavigator();

const Tierra = () => {
    return (
        <Stack.Navigator
            initialRouteName="Tierra"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
            }}
        >
            <Stack.Screen name="Tierra" component={ListaTierra} />
        </Stack.Navigator>
    );
}

export default Tierra;
