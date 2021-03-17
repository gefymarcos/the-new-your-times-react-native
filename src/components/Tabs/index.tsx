import * as React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { loadArticlesAction } from '../../modules/articles/actions';
import Science from '../../pages/Science'
import Technology from '../../pages/Technology'
import theme from '../../styles/theme'

type MaterialBottomTabParams = {
  TabScience: undefined
  TabTechnology: undefined
}

const MaterialBottomTabs = createMaterialBottomTabNavigator<MaterialBottomTabParams>()

const Tabs = () => {
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      <MaterialBottomTabs.Navigator barStyle={styles.tabBar}>
        <MaterialBottomTabs.Screen
          name="TabScience"
          component={Science}
          options={{
            tabBarLabel: 'Science',
            tabBarIcon: 'test-tube',
            tabBarColor: theme.colors.lightGray,
          }}
          listeners={{
            tabPress: () => {
              dispatch(loadArticlesAction('science'));
            }
          }}
          key='TabScience'
        />
        <MaterialBottomTabs.Screen
          name="TabTechnology"
          component={Technology}
          options={{
            tabBarLabel: 'Technology',
            tabBarIcon: 'tablet-dashboard',
            tabBarColor: theme.colors.lightGray
          }}
          listeners={{
            tabPress: () => {
              dispatch(loadArticlesAction('technology'));
            }
          }}
          key='TabTechnology'
        />
      </MaterialBottomTabs.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.black
  }
})

export default Tabs
