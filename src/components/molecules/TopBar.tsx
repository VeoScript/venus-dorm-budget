import React from 'react';
import tw from '../../styles/tailwind';
import {View, Text} from 'react-native';

const TopBar = (): JSX.Element => {
  return (
    <View style={tw`flex-col items-center w-full mt-3 px-3`}>
      <Text style={tw`font-pacifico text-2xl text-accent-1`}>VenusDorm</Text>
      <Text style={tw`font-poppins-light text-[10px] text-center text-accent-1`}>
        Treasury App created with ❤️ by Veoscript.
      </Text>
    </View>
  );
};

export default TopBar;
