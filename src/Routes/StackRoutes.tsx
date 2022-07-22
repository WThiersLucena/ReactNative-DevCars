import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import { Home } from "../pages/Home/Home";
import { Loja } from "../pages/loja/Loja";

const Stack = createStackNavigator(); 

export function Routes(){

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"Loja"} component={Loja} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


// export function AuthRoutes(){

//     return(
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
//                 <Stack.Screen name={"Home"} component={Home}/>
//                 <Stack.Screen name={"Loja"} component={Loja} options={{headerShown: false}}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }