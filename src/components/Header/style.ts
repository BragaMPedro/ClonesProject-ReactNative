import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingHorizontal: 15,
        marginBottom: 10,
        height: 80,
        width: "100%",
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
    
    searchIcon:{
        color: "#D4DACF",
        fontSize: 30,
    },
})