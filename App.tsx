import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HorizontalSwiper from './HorizontalSwiper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HorizontalSwiper" component={HorizontalSwiper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
