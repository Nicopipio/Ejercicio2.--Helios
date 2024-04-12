import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ListaSol from "./ListaSol";

const Stack = createStackNavigator();

const Sol = () => {
    return (
        <Stack.Navigator
            initialRouteName="Sol"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS 
            }}
        >
            <Stack.Screen name="Sol" component={ListaSol} />
        </Stack.Navigator>
    );
}

export default Sol;
