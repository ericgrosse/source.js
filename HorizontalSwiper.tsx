import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VerticalSwiper from './VerticalSwiper';

const Tab = createMaterialTopTabNavigator();

const categories = ['Category1', 'Category2', 'Category3'];

const HorizontalSwiper = () => {
  return (
    <Tab.Navigator 
      tabBarPosition="bottom" 
      screenOptions={{ swipeEnabled: true }}>
      {categories.map((category, index) => (
        <Tab.Screen
          key={index}
          name={category}
          component={() => <VerticalSwiper category={category} />}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HorizontalSwiper;
