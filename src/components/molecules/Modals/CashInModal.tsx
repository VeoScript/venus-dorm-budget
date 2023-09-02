import React from 'react';
import tw from '../../../styles/tailwind';
import {FeatherIcon} from '../../../utils/Icons';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Modal from 'react-native-modal';

import {cashInModalStore} from '../../../helpers/store/modals';

const CashInModal = () => {
  const {isVisible, setIsVisible} = cashInModalStore();

  const onClose = () => {
    setIsVisible(false);
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
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>Current Balance</Text>
            <TextInput
              editable={false}
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
            />
          </View>
          <View style={tw`flex-col w-full gap-y-2`}>
            <Text style={tw`ml-2 font-poppins-light text-xs text-accent-1`}>Enter Amount</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={tw`w-full p-3 rounded-xl shadow-md font-poppins text-sm text-accent-2 bg-accent-1`}
            />
          </View>
          <TouchableOpacity style={tw`flex-row justify-center w-full p-3 rounded-xl bg-accent-5`}>
            <Text style={tw`font-poppins text-sm text-accent-1`}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CashInModal;
