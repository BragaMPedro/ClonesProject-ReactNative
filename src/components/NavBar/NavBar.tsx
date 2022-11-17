import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"
import { styles } from "./style"

export const NavBar = ({ logOut }) => {

    function handleLogOut(){
        logOut();
    }

   return (
      <View style={styles.container}>
         <MaterialIcons name="home" style={styles.iconSelected} />
         <MaterialIcons name="place" style={styles.icon} />
         <MaterialIcons name="post-add" style={styles.icon} />
         <MaterialIcons name="notifications" style={styles.icon} />
         <TouchableOpacity onPress={handleLogOut}>
            <MaterialIcons name="person" style={styles.icon} />
         </TouchableOpacity>
      </View>
   )
}
