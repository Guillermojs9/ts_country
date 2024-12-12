import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { Card } from "../components/CountryCard";

type Props = NativeStackScreenProps<RootStackParamList, 'CountryInfo'>;

export function CountryInfoScreen({ route }: Props): React.JSX.Element {
    const { country } = route.params;
    return (
        <Card country={country}></Card>
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