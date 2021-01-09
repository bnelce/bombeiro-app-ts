import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Laws from "../pages/Laws";
import CodeMenu from "../pages/CodeMenu";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Laws" component={Laws} />
        <Stack.Screen name="CodeMenu" component={CodeMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
