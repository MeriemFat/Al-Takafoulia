import React from "react";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const navigation = useNavigation(); 

  const goToDetailsScreen = () => {
    navigation.navigate('Details'); 
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;


