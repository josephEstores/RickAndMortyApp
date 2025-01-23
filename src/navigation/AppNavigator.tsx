import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { Character } from '../api/api';
import CharacterDetailsScreen from '../screens/CharacterDetails/CharacterDetailsScreen';
import { styles } from './AppNavigator.styles';

type RootStackParamList = {
  Home: undefined;
  CharacterDetails: { character: Character };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleStyle: styles.headerTitle
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} options={{ headerTitle: "Character Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;