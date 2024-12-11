import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Pressable } from 'react-native';

type Country = {
  region: string;
};

function onPressFunction(cadena: string) {
  console.log(cadena);
}

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        {regions.length > 0 ? (
          regions.map((region, index) => (
            <Pressable key={index} onPress={() => onPressFunction(region)}>
              <Text style={styles.regionText}>
                {region}
              </Text>
            </Pressable>
          ))
        ) : (
          <Text>Cargando regiones...</Text>
        )}
      </View>
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


