import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegionScreen } from './RegionScreen';
import { CountriesScreen } from './CountriesScreen';
import { Country } from './Country';
import { CountryInfoScreen } from './CountryInfoScreen';
export type RootStackParamList = {
  Region: undefined;
  Countries: { countries: Country[] };
  CountryInfo: { country: Country };
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
