import { Tabs } from 'expo-router';
import { View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B19CD9',
        tabBarInactiveTintColor: '#E0E0E0',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0,
          paddingBottom: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shoppingList"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color }) => (
            <Ionicons name="receipt-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chef-hat" size={24} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
