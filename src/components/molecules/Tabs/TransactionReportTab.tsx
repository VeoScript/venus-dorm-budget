import React from 'react';
import moment from 'moment';
import tw from '../../../styles/tailwind';
import {FlatList, View, Text} from 'react-native';

import CashInModal from '../Modals/CashInModal';
import AddExpenseModal from '../Modals/AddExpenseModal';

import useMoneyFormat from '../../../helpers/hooks/useMoneyFormat';

import {cashInReportStore} from '../../../helpers/store';

const TransactionReportTab = (): JSX.Element => {
  const {cashInReportData} = cashInReportStore();

  const itemKeyExtractor = (item: any, index: {toString: () => any}): string => {
    return index.toString();
  };

  const listIsEmpty: JSX.Element = (
    <View style={tw`flex-1 flex-col items-center justify-center w-full my-3 p-3`}>
      <Text style={tw`font-poppins text-sm text-accent-1`}>No records as of now...</Text>
    </View>
  );

  const renderData = ({item}: any): JSX.Element => {
    const {type, amount, createdAt} = item;
    return (
      <View style={tw`flex-col w-full p-3 gap-y-1 rounded-xl shadow-md bg-accent-1`}>
        <View style={tw`flex-row items-center justify-between w-full gap-x-3`}>
          <Text style={tw`font-poppins-bold text-xs text-accent-2`}>{type === 'cash-in' ? 'Cash In' : 'Expense'}</Text>
          <Text style={tw`font-poppins text-[11px] text-neutral-500`}>
            {moment(createdAt).format('lll')}
          </Text>
        </View>
        <Text style={tw.style('font-poppins-bold text-base', type === 'cash-in' ? 'text-accent-3' : 'text-accent-4')}>
          {type === 'cash-in' ? '+' : '-'} {useMoneyFormat(amount)}
        </Text>
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
        data={cashInReportData ? cashInReportData.sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))) : []}
        keyExtractor={itemKeyExtractor}
        renderItem={renderData}
      />
      <CashInModal />
      <AddExpenseModal />
    </View>
  );
};

export default TransactionReportTab;
