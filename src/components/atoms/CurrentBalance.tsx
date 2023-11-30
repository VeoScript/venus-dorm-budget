import React from 'react';
import tw from '../../styles/tailwind';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import useMoneyFormat from '../../helpers/hooks/useMoneyFormat';

import {cashInReportStore, currentBalanceStore, expensesListStore} from '../../helpers/store';
import {cashInModalStore, addExpenseModalStore} from '../../helpers/store/modals';
import {FeatherIcon} from '../../utils/Icons';

const CurrentBalance = (): JSX.Element => {
  const {setIsVisible: setIsVisibleCashIn} = cashInModalStore();
  const {setIsVisible: setIsVisibleAddExpense} = addExpenseModalStore();

  const {currentBalance, setDefault: resetBalance} = currentBalanceStore();
  const {setDefault: resetExpensesList} = expensesListStore();
  const {setDefault: resetCashInReports} = cashInReportStore();

  return (
    <View style={tw`relative flex-col items-center w-full p-5 gap-y-3 rounded-2xl bg-white`}>
      <TouchableOpacity
        style={tw`absolute top-3 right-3`}
        onPress={() => {
          Alert.alert(
            'Reset',
            'Are you sure you want to reset your budget? This cannot be undone.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Proceed',
                style: 'default',
                onPress: () => {
                  resetBalance();
                  resetExpensesList();
                  resetCashInReports();
                },
              },
            ],
            {
              cancelable: true,
            },
          );
        }}>
        <FeatherIcon name="rotate-ccw" color="#34787A" size={20} />
      </TouchableOpacity>
      <View style={tw`flex-col items-center w-full gap-y-1`}>
        <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Current Balance</Text>
        <Text style={tw`font-poppins-bold text-3xl text-accent-5 uppercase`}>
          {useMoneyFormat(currentBalance)}
        </Text>
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
  );
};

export default CurrentBalance;
