import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegionScreen } from './src/screens/RegionScreen';
import { CountriesScreen } from './src/screens/CountriesScreen';
import { CountryInfoScreen } from './src/screens/CountryInfoScreen';
import { RootStackParamList } from './src/types/RootStackParamList';

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
        <Stack.Screen
          name="CountryInfo"
          component={CountryInfoScreen}
          options={{ title: 'Welcome to Country Info Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
