import React from 'react';
import tw from '../styles/tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DefaultLayout from '../components/templates/DefaultLayout';
import CashInReportTab from '../components/molecules/Tabs/CashInReportTab';
import ExpensesListTab from '../components/molecules/Tabs/ExpensesListTab';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <View style={tw`flex-1 flex-col w-full px-3 py-3 gap-y-3`}>
        <View style={tw`flex-col items-center w-full p-5 gap-y-5 rounded-2xl bg-white`}>
          <View style={tw`flex-col items-center w-full gap-y-3`}>
            <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Current Balance</Text>
            <Text style={tw`font-poppins-bold text-3xl text-accent-5 uppercase`}>₱ 20,500</Text>
          </View>
          <View style={tw`flex-row items-center w-full gap-x-2`}>
            <TouchableOpacity style={tw`flex-1 flex-row justify-center w-full p-3 rounded-xl bg-accent-3`}>
              <Text style={tw`font-poppins-medium text-sm text-accent-1`}>Cash In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-1 flex-row justify-center w-full p-3 rounded-xl bg-accent-4`}>
              <Text style={tw`font-poppins-medium text-sm text-accent-1`}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`flex-1`}>
          <Tab.Navigator
            initialRouteName="HomeScreenTabs"
            backBehavior="none"
            style={tw`rounded-2xl border-2 border-accent-5`}
            screenOptions={{
              tabBarActiveTintColor: '#FFFFFF',
              tabBarLabelStyle: [tw`font-poppins-bold capitalize text-[12px]`],
              tabBarIndicatorStyle: [tw`bg-[#34787A]`],
              tabBarStyle: [tw`bg-accent-3`],
              tabBarPressColor: '#68BCBE',
            }}>
            <Tab.Screen
              name="ExpensesListTab"
              component={ExpensesListTab}
              options={{tabBarLabel: 'Expenses List'}}
            />
            <Tab.Screen
              name="CashInReportTab"
              component={CashInReportTab}
              options={{tabBarLabel: 'Cash In Report'}}
            />
          </Tab.Navigator>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default HomeScreen;
