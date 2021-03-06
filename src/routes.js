import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from  '@react-navigation/native';

import Login from "./pages/Login";
import Register from './pages/Register';
import Avatar from './pages/Avatar';
import GameScreenOptions from './pages/GameScreenOptions';
import Ranking from './pages/Ranking';

const AppStack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name='Register' component={Register}/>
        <AppStack.Screen name='Avatar' component={Avatar}/>
        <AppStack.Screen name='GameScreenOptions' component={GameScreenOptions}/>
        <AppStack.Screen name="Ranking" component={Ranking} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
