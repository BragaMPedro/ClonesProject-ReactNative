import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%"
    },
    userContainer:{
        flexDirection: "row",
        alignContent: "center",
    },
    userAvatar:{
        width: 36,
        height: 36,
        borderRadius: 17,
        marginRight: 10,
    },
    userName:{
        color: "#D4DACF",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "left",
    },
    postInfo:{
        color: "#8f8f99",
        fontSize: 10,
        textAlign: "left",
    },
})