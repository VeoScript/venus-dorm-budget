import React, {useState} from 'react';
import tw from '../../../styles/tailwind';
import {FeatherIcon} from '../../../utils/Icons';
import {Toast} from '../../../utils/Toast';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Modal from 'react-native-modal';
import StatusBarMain from '../../organisms/StatusBarMain';

import {addExpenseModalStore} from '../../../helpers/store/modals';
import {currentBalanceStore, cashInReportStore, expensesListStore} from '../../../helpers/store';

const AddExpenseModal = (): JSX.Element => {
  const {isVisible, setIsVisible} = addExpenseModalStore();
  const {setExpensesData} = expensesListStore();
  const {setCashInReportData} = cashInReportStore();
  const {currentBalance, setCurrentBalance} = currentBalanceStore();

  const [purpose, setPurpose] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const onClose = () => {
    setPurpose('');
    setAmount(0);
    setIsVisible(false);
  };

  const handleAddExpense = () => {
    if (purpose.trim() === '') return Toast('Purpose is required');
    if (amount == 0) return Toast('Invalid amount');

    // calculate the current balance and the expense amount...
    const finalCurrentBalance = currentBalance - amount;

    // save storage for cash in report...
    setCashInReportData({
      type: 'expense',
      amount,
      createdAt: new Date(),
    });

    // save storage for expenses list...
    setExpensesData({
      purpose,
      totalMoney: currentBalance,
      amount: amount,
      currentBalance: finalCurrentBalance,
      createdAt: new Date(),
    });

    // save storage for current balance...
    setCurrentBalance(finalCurrentBalance);

    onClose();
  };

  return (
    <Modal
      animationIn="slideInDown"
      animationOut="slideOutUp"
      style={tw`m-0`}
      backdropOpacity={0.1}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <StatusBarMain animated={false} backgroundColor="#F5787E" barStyle="light-content" />
      <View style={tw`flex-1 flex-col w-full bg-accent-4`}>
        <View
          style={tw`flex-row items-center w-full p-3 gap-x-3 border-b border-red-800 border-opacity-20`}>
          <TouchableOpacity onPress={onClose}>
            <FeatherIcon name="chevron-left" color="#FFFFFF" size={30} />
          </TouchableOpacity>
          <Text style={tw`font-poppins-bold text-xl text-accent-6`}>Add Expense</Text>
        </View>
        <View style={tw`flex-col w-full p-3 gap-y-3`}>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>Current Balance</Text>
            <TextInput
              editable={false}
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
              value={String(currentBalance)}
            />
          </View>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>
              Purpose (e.g. Shampoo, Soap, etc.)
            </Text>
            <TextInput
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
              value={purpose}
              onChangeText={value => setPurpose(value)}
            />
          </View>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>Enter Amount</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
              value={String(amount)}
              onChangeText={value => setAmount(Number(value))}
            />
          </View>
          <TouchableOpacity
            style={tw`flex-row justify-center w-full p-3 rounded-xl bg-accent-6`}
            onPress={handleAddExpense}>
            <Text style={tw`font-poppins text-sm text-accent-1`}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddExpenseModal;
