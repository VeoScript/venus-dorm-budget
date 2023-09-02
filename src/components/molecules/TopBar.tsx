import React from 'react';
import tw from '../../styles/tailwind';
import {FeatherIcon} from '../../utils/Icons';
import {View, Text, TouchableOpacity} from 'react-native';

const TopBar = () => {
  return (
    <View style={tw`flex-row items-center justify-between w-full p-3`}>
      <TouchableOpacity>
        <FeatherIcon name="settings" color="#FFFFFF" size={25} />
      </TouchableOpacity>
      <Text style={tw`font-euphoria text-accent-1 text-4xl`}>VenusDorm</Text>
      <TouchableOpacity>
        <FeatherIcon name="log-out" color="#FFFFFF" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
