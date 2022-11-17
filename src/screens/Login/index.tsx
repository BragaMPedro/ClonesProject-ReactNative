import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { LoginInput } from "../../components/LoginInput/LoginInput"
import { styles } from "./styles"

export const Login = ({ login }) => {
   function kindOfLogIn() {
      login()
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <MaterialIcons name="arrow-left" color={"#cfd0d5"} size={36} style={{ marginRight: 120 }} />
            <Text style={styles.title}>Login</Text>
         </View>

         <View style={styles.content}>
            <LoginInput label="Conta Hoyoverse" placeholder="Usuário/E-mail" type="default" />
            <LoginInput label="Senha" placeholder="Senha" type="password" />

            <Text style={styles.labelAux}>Esqueci a Senha</Text>
         </View>

         <TouchableOpacity style={styles.buttonLogin} onPress={kindOfLogIn}>
            <Text style={styles.title}>Login</Text>
         </TouchableOpacity>
      </View>
   )
}
