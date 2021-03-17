import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Article from '../Article';

type MaterialBottomTabParams = {
  TabScience: undefined;
  TabTechnology: undefined;
};

const MaterialBottomTabs = createMaterialBottomTabNavigator<MaterialBottomTabParams>();

const Tabs = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabs.Navigator barStyle={styles.tabBar}>
        <MaterialBottomTabs.Screen
          name="TabScience"
          component={Article}
          options={{
            tabBarLabel: 'Science',
            tabBarIcon: 'test-tube',
            tabBarColor: '#9FD5C9',
          }}
        />
        <MaterialBottomTabs.Screen
          name="TabTechnology"
          component={Article}
          options={{
            tabBarLabel: 'Technology',
            tabBarIcon: 'tablet-dashboard',
            tabBarColor: '#9FD5C9',
          }}
        />
      </MaterialBottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
});

export default Tabs
