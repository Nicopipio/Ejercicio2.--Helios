import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ListaPlanetas from "./ListaPlanetas";
import Detalle from "./DetallePlanetas";

const Stack = createStackNavigator();

const Sistema = () => {
    return (
        <Stack.Navigator
            initialRouteName="Planetas"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
            }}
        >
            <Stack.Screen name="Planetas" component={ListaPlanetas} />
            <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
    );
}

export default Sistema;
