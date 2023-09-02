import React from 'react';
import StatusBarMain from '../components/organisms/StatusBarMain';
import * as screen from '../shared/screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

const AppStacks = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBarMain
        animated={false}
        backgroundColor="#68BCBE"
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="HomeScreen" component={screen.HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStacks;
