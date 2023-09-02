import React from 'react';
import moment from 'moment';
import tw from '../../../styles/tailwind';
import {FeatherIcon} from '../../../utils/Icons';
import {FlatList, View, Text} from 'react-native';

import useMoneyFormat from '../../../helpers/hooks/useMoneyFormat';

import {expensesListStore} from '../../../helpers/store';

const ExpensesListTab = (): JSX.Element => {
  const {expensesData} = expensesListStore();

  const itemKeyExtractor = (item: any, index: {toString: () => any}): string => {
    return index.toString();
  };

  const listIsEmpty: JSX.Element = (
    <View style={tw`flex-1 flex-col items-center justify-center w-full my-3 p-3`}>
      <Text style={tw`font-poppins text-sm text-accent-1`}>No records as of now...</Text>
    </View>
  );

  const renderData = ({item}: any): JSX.Element => {
    const {purpose, totalMoney, amount, createdAt} = item;
    return (
      <View style={tw`flex-col w-full p-3 gap-y-5 rounded-xl shadow-md bg-accent-1`}>
        <View style={tw`flex-row items-center justify-between w-full gap-x-3`}>
          <Text style={tw`font-poppins-bold text-xs text-accent-2`}>Expense</Text>
          <Text style={tw`font-poppins text-[11px] text-neutral-500`}>
            {moment(createdAt).format('lll')}
          </Text>
        </View>
        <Text style={tw`font-poppins text-sm text-neutral-500`}>
          <FeatherIcon name="message-square" color="#34787A" size={13} /> - {purpose}
        </Text>
        <View style={tw`flex-col items-start`}>
          <View style={tw`flex-row items-center gap-x-1`}>
            <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Total Money:</Text>
            <Text style={tw`font-poppins-bold text-sm text-accent-3`}>
              {useMoneyFormat(totalMoney)}
            </Text>
          </View>
          <View style={tw`flex-row items-center gap-x-1`}>
            <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Amount:</Text>
            <Text style={tw`font-poppins-bold text-sm text-accent-4`}>
              - {useMoneyFormat(amount)}
            </Text>
          </View>
          <View style={tw`flex-row items-center gap-x-1`}>
            <Text style={tw`font-poppins-light text-xs text-neutral-500`}>Current Balance:</Text>
            <Text style={tw`font-poppins-bold text-sm text-accent-2`}>
              {useMoneyFormat(totalMoney - amount)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-accent-5`}>
      <FlatList
        contentContainerStyle={tw`w-full gap-y-2 p-2`}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listIsEmpty}
        data={expensesData ? expensesData.sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))) : []}
        keyExtractor={itemKeyExtractor}
        renderItem={renderData}
      />
    </View>
  );
};

export default ExpensesListTab;
