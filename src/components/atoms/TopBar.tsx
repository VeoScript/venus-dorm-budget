import React from 'react';
import tw from '../../styles/tailwind';
import {View, Text} from 'react-native';

const TopBar = (): JSX.Element => {
  return (
    <View style={tw`flex-col items-center w-full mt-5 px-3`}>
      <Text style={tw`p-1 font-pacifico text-2xl text-accent-1`}>Venus Dorm</Text>
      <Text style={tw`font-poppins-light text-[11px] text-center text-accent-1`}>
        Your personal budget companion
      </Text>
    </View>
  );
};

export default TopBar;
