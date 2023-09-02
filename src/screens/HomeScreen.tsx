import React from 'react';
import tw from '../styles/tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DefaultLayout from '../components/templates/DefaultLayout';
import TransactionReportTab from '../components/molecules/Tabs/TransactionReportTab';
import ExpensesListTab from '../components/molecules/Tabs/ExpensesListTab';

import useMoneyFormat from '../helpers/hooks/useMoneyFormat';

import {currentBalanceStore} from '../helpers/store';
import {cashInModalStore, addExpenseModalStore} from '../helpers/store/modals';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = (): JSX.Element => {
  const {setIsVisible: setIsVisibleCashIn} = cashInModalStore();
  const {setIsVisible: setIsVisibleAddExpense} = addExpenseModalStore();

  const {currentBalance} = currentBalanceStore();

  return (
    <DefaultLayout>
      <View style={tw`flex-1 flex-col w-full px-3 py-3 gap-y-3`}>
        <View style={tw`flex-col items-center w-full p-5 gap-y-3 rounded-2xl bg-white`}>
          <View style={tw`flex-col items-center w-full gap-y-1`}>
            <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Current Balance</Text>
            <Text style={tw`font-poppins-bold text-3xl text-accent-5 uppercase`}>{useMoneyFormat(currentBalance)}</Text>
          </View>
          <View style={tw`flex-row items-center w-full gap-x-2`}>
            <TouchableOpacity
              style={tw`flex-1 flex-row justify-center w-full p-3 rounded-xl bg-accent-3`}
              onPress={() => setIsVisibleCashIn(true)}>
              <Text style={tw`font-poppins-medium text-xs text-accent-1`}>Cash In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-1 flex-row justify-center w-full p-3 rounded-xl bg-accent-4`}
              onPress={() => setIsVisibleAddExpense(true)}>
              <Text style={tw`font-poppins-medium text-xs text-accent-1`}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
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
      </View>
    </DefaultLayout>
  );
};

export default HomeScreen;
