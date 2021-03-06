
import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'


export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider >
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(switchNavigator);