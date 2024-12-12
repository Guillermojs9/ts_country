import { SafeAreaView, StatusBar, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { useRegions } from '../hooks/useRegions';
import { fetchCountries } from '../conexion/FetchCountries';

type Props = NativeStackScreenProps<RootStackParamList, 'Region'>;

const urlRegion: string = 'https://restcountries.com/v3.1/all?fields=region';
const urlPaisesRegion: string = 'https://restcountries.com/v3.1/region/';

export function RegionScreen({ navigation }: Props): React.JSX.Element {
    const { regions } = useRegions(urlRegion);

    async function onPressFunction(region: string) {
        const countries = await fetchCountries(urlPaisesRegion, region);
        navigation.navigate('Countries', { countries });
    }

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
