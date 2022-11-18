import { StyleSheet } from "react-native";
import Constants from "expo-constants"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 15,
        marginBottom: 10,
        height: 80,
        width: "100%",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#1B1D2A00",
    },

    titleList: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        width: "75%",
    },

    titleSelected: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ffffff",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        opacity: 0.5,
    },

    searchIcon: {
        color: "#D4DACF",
        fontSize: 30,
    },
})