import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Country } from '../entities/Country';
import { RootStackParamList } from '../types/RootStackParamList';
import { Card } from './CountryCard';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Countries'>;
  countries: Country[];
};

export function CountriesFlatList({ navigation, countries }: Props): React.JSX.Element {
  const onPressFunction = (country: Country) => {
    navigation.navigate('CountryInfo', { country });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {countries.length > 0 ? (
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressFunction(item)}>
              <Card country={item}></Card>
            </Pressable>
          )}
        />
      ) : (
        <Text>Cargando países...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  regionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
