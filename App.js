import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DashBoard from './screens/DashBoard';
import Fuel from './screens/Fuel';
import Petrol from './screens/Petrol';
import Diesel from './screens/Diesel';
import Gas from './screens/Gas';
import Register from './screens/Register';
import Sign from './screens/Sign';
import kerosine from './screens/Kerosine';
import Profile from './screens/Profile';
import Live_Queue_Map from './screens/Live_Queue_Map';
import Notifications from './screens/Notifications';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FuelSL" component={HomeScreen} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="Fuel" component={Fuel} />
          <Stack.Screen name="Petrol" component={Petrol} />
          <Stack.Screen name="Diesel" component={Diesel} />
          <Stack.Screen name="Gas" component={Gas} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="kerosine" component={kerosine} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Live_Queue_Map" component={Live_Queue_Map} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
