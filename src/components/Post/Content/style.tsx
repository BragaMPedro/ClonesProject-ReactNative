import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "space-between",
        height: 210,
        marginVertical: 10,
        marginBottom: 20,
    },
    title:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: -10,
    },
    postPreview:{
        fontSize: 14,
        color: "#D4DACF",
    },
    imgContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    images:{
        height: 100,
        width: 100,
        borderRadius: 5,
    },
    tagsContainer:{
        flexDirection: "row",
    },
    tags:{
        textAlign: "left",
        fontSize: 10,
        color: "#7283d5",
        marginRight: 10,
    },
})