import React from 'react';
import tw from '../../styles/tailwind';
import {SafeAreaView, View} from 'react-native';
import TopBar from '../molecules/TopBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-accent-3`}>
      <TopBar />
      <View style={tw`flex-1`}>{children}</View>
    </SafeAreaView>
  );
};

export default DefaultLayout;
