import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { Country } from "./Country";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type Props = NativeStackScreenProps<RootStackParamList, 'CountryInfo'>;

export function CountryInfoScreen({ route }: Props): React.JSX.Element {
    const { country } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.regionText}>{country.name}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    countryName: {
        fontSize: 18,
        marginBottom: 10,
    },
    regionText: {
        fontSize: 18,
        marginBottom: 10,
    },
});