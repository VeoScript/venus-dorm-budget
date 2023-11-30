import React from 'react';
import tw from '../styles/tailwind';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DefaultLayout from '../components/templates/DefaultLayout';
import CurrentBalance from '../components/atoms/CurrentBalance';
import TransactionReportTab from '../components/molecules/Tabs/TransactionReportTab';
import ExpensesListTab from '../components/molecules/Tabs/ExpensesListTab';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  return (
    <DefaultLayout>
      <View style={tw`flex-1 flex-col w-full px-3 py-3 gap-y-3`}>
        <CurrentBalance />
        <View style={tw`flex-1`}>
          <Tab.Navigator
            initialRouteName="HomeScreenTabs"
            backBehavior="none"
            style={tw`rounded-2xl`}
            screenOptions={{
              tabBarActiveTintColor: '#FFFFFF',
              tabBarLabelStyle: [tw`font-poppins-bold capitalize text-[12px]`],
              tabBarIndicatorStyle: [tw`bg-[#68BCBE]`],
              tabBarStyle: [tw`bg-accent-5`],
              tabBarPressColor: '#68BCBE',
            }}>
            <Tab.Screen
              name="TransactionReportTab"
              component={TransactionReportTab}
              options={{tabBarLabel: 'Transaction Report'}}
            />
            <Tab.Screen
              name="ExpensesListTab"
              component={ExpensesListTab}
              options={{tabBarLabel: 'Expenses List'}}
            />
          </Tab.Navigator>
        </View>
        <Text style={tw`font-poppins-light text-[10px] text-center text-accent-1`}>
          Created with ❤️ by Veoscript.
        </Text>
      </View>
    </DefaultLayout>
  );
};

export default HomeScreen;
