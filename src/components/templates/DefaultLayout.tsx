import React from 'react';
import tw from '../../styles/tailwind';
import {SafeAreaView, View} from 'react-native';
import TopBar from '../molecules/TopBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}): JSX.Element => {
  return (
    <SafeAreaView style={tw`relative flex-col w-full h-full bg-accent-3`}>
      <TopBar />
      <View style={tw`flex-1`}>{children}</View>
    </SafeAreaView>
  );
};

export default DefaultLayout;
