import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegionScreen } from './RegionScreen';
import { CountriesScreen } from './CountriesScreen';

export type RootStackParamList = {
  Region: undefined;
  Countries: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Region"
          component={RegionScreen}
          options={{ title: 'Welcome to Regions Screen' }}
        />
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          options={{ title: 'Welcome to Countries Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
