import React, {useState} from 'react';
import tw from '../../../styles/tailwind';
import {FeatherIcon} from '../../../utils/Icons';
import {Toast} from '../../../utils/Toast';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import Modal from 'react-native-modal';

import {cashInModalStore} from '../../../helpers/store/modals';
import {currentBalanceStore, cashInReportStore} from '../../../helpers/store';

const CashInModal = (): JSX.Element => {
  const {isVisible, setIsVisible} = cashInModalStore();
  const {setCashInReportData} = cashInReportStore();
  const {currentBalance, setCurrentBalance} = currentBalanceStore();

  const [amount, setAmount] = useState<number>(0);

  const onClose = () => {
    setAmount(0);
    setIsVisible(false);
  };

  const handleCashIn = () => {
    if (amount == 0) return Toast('Invalid amount');

    Alert.alert(
      'Cash In',
      'Are you sure you want to proceed?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'default',
          onPress: () => {
            // save storage for cash in report...
            setCashInReportData({
              type: 'cash-in',
              amount,
              createdAt: new Date(),
            });

            // save storage for current balance...
            setCurrentBalance(currentBalance + amount);

            onClose();
          },
        },
      ],
      {
        cancelable: true,
      },
    );
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
      <View style={tw`flex-1 flex-col w-full bg-accent-3`}>
        <View
          style={tw`flex-row items-center w-full p-3 gap-x-3 border-b border-accent-5 border-opacity-20`}>
          <TouchableOpacity onPress={onClose}>
            <FeatherIcon name="chevron-left" color="#FFFFFF" size={30} />
          </TouchableOpacity>
          <Text style={tw`font-poppins-bold text-xl text-accent-5`}>Cash In</Text>
        </View>
        <View style={tw`flex-col w-full p-3 gap-y-3`}>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>
              Your Current Balance
            </Text>
            <TextInput
              editable={false}
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-1 bg-accent-5`}
              value={String(currentBalance)}
            />
          </View>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>Enter Amount</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
              value={String(amount)}
              onChangeText={value => setAmount(Number(value.replace(/[^0-9]/g, '')))}
            />
          </View>
          <TouchableOpacity
            style={tw`flex-row justify-center w-full p-3 rounded-xl bg-accent-5`}
            onPress={handleCashIn}>
            <Text style={tw`font-poppins text-sm text-accent-1`}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CashInModal;
