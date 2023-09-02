import React from 'react';
import moment from 'moment';
import tw from '../../../styles/tailwind';
import {FlatList, View, Text} from 'react-native';

import useMoneyFormat from '../../../helpers/hooks/useMoneyFormat';

const sampleData = [
  {
    amount: 500,
    createdAt: new Date(),
  },
  {
    amount: 500,
    createdAt: new Date(),
  },
  {
    amount: 1500,
    createdAt: new Date(),
  },
];

const CashInReportTab = () => {
  const itemKeyExtractor = (item: any, index: {toString: () => any}): string => {
    return index.toString();
  };

  const listIsEmpty: JSX.Element = (
    <View style={tw`flex-1 flex-col items-center justify-center w-full my-3 p-3`}>
      <Text style={tw`font-poppins text-sm text-accent-3`}>No records as of now...</Text>
    </View>
  );

  const renderData = ({item}: any): JSX.Element => {
    const {amount, createdAt} = item;
    return (
      <View style={tw`flex-col w-full p-3 gap-y-1 rounded-xl shadow-md bg-accent-1`}>
        <View style={tw`flex-row items-center justify-between w-full gap-x-3`}>
          <Text style={tw`font-poppins text-xs text-accent-2`}>Cash In</Text>
          <Text style={tw`font-poppins text-[11px] text-neutral-400`}>
            {moment(createdAt).format('lll')}
          </Text>
        </View>
        <Text style={tw`font-poppins-bold text-base text-accent-3`}>+ {useMoneyFormat(amount)}</Text>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-accent-3`}>
      <FlatList
        contentContainerStyle={tw`w-full gap-y-2 p-2`}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listIsEmpty}
        data={sampleData}
        keyExtractor={itemKeyExtractor}
        renderItem={renderData}
      />
    </View>
  );
};

export default CashInReportTab;
