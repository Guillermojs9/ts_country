import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    regionText: {
        fontSize: 18,
        marginBottom: 10,
    },
    containerCard: {
        flexDirection: 'row',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textcontainerCard: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    languages: {
        backgroundColor: '#e0f7fa',
        color: '#00796b',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
    },
    countryName: {
        fontSize: 18,
        marginBottom: 10,
    },
    webview: {
        flex: 1,
    },

})