import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './pages/welcome';
import YouTubeScreen from './pages/youtubetela'; // Corrigido aqui
import VimeoScreen from './pages/vimeotela';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="youtubetela" component={YouTubeScreen} />
        <Stack.Screen name="vimeotela" component={VimeoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
