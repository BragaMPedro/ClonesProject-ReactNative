import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text } from "react-native"
import { styles } from "./style"

export const Header = () => {
   return (
      <View style={styles.container}>
         <View style={styles.titleList}>
            <Text style={styles.title}>Seguindo</Text>
            <Text style={styles.titleSelected}>Início</Text>
            <Text style={styles.title}>Eventos</Text>
         </View>
         <MaterialIcons name="search" style={styles.searchIcon} />
      </View>
   )
}
