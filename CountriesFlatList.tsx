import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { Country } from "./Country";

export function CountriesFlatList({ countries }: { countries: Country[] }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {countries.length > 0 ? (
                <FlatList
                    data={countries}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.regionText}>{item.name}</Text>
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