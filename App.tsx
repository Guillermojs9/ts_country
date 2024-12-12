import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegionScreen } from './RegionScreen';
import { CountriesScreen } from './CountriesScreen';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Region"
          component={RegionScreen}
          options={{ title: 'Welcome to Regions Screen' }}
        />
        <Stack.Screen name="Countries" component={CountriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
