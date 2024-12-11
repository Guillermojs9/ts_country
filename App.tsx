import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, FlatList, Text, Pressable } from 'react-native';

type Country = {
  region: string;
};

const App = (): React.JSX.Element => {
  const [regions, setRegions] = useState<string[]>([]);

  async function getRegions() {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=region');
    if (!response.ok) {
      throw new Error('Error fetching regions');
    }
    const jsonData: Country[] = await response.json();
    const regionsResponse = [...new Set(jsonData.map((country) => country.region))];
    setRegions(regionsResponse);
  }
  useEffect(() => {
    getRegions();
  }, []);

  const onPressFunction = (region: string) => {
    console.log(region);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {regions.length > 0 ? (
        <FlatList
          data={regions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressFunction(item)}>
              <Text style={styles.regionText}>{item}</Text>
            </Pressable>
          )}
        />
      ) : (
        <Text>Cargando regiones...</Text>
      )}
    </SafeAreaView>
  );
};

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

export default App;



