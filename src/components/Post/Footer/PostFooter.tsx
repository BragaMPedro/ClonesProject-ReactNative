import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text } from "react-native"
import { styles } from "./style"

export const PostFooter = () => {
   return (
      <View style={styles.container}>
         <View style={styles.iconCounters}>
            <MaterialIcons name="visibility" style={styles.iconStyle} />
            <Text style={styles.counterStyle}>1502</Text>
         </View>
         <View style={styles.iconCounters}>
            <MaterialIcons name="comment" style={styles.iconStyle} />
            <Text style={styles.counterStyle}>154</Text>
         </View>
         <View style={styles.iconCounters}>
            <MaterialIcons name="how-to-reg" style={styles.iconStyle} />
            <Text style={styles.counterStyle}>555</Text>
         </View>
      </View>
   )
}
