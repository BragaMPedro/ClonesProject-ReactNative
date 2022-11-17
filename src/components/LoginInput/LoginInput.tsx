import React, { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "../../screens/Login/styles"

export const LoginInput = ({ label, placeholder, type }) => {
   const [focus, setFocus] = useState(false);
   const [passwordVisibility, setPasswordVisibility] = useState(false);
   const inputStyle = focus ? styles.inputFocus : styles.inputBox;

   function handlePasswordVisibility() {
      setPasswordVisibility(visibility => !visibility);
   }

   if (type === "password") {
      return (
         <View style={inputStyle}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
               <TextInput
                  style={styles.textinput}
                  secureTextEntry={!passwordVisibility}
                  textContentType={type}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  placeholder={placeholder}
                  placeholderTextColor="#595f70"
               />
               <TouchableOpacity activeOpacity={0.8} onPress={handlePasswordVisibility}>
                  {passwordVisibility ? <MaterialIcons name="visibility" style={styles.passwordIcon} />
                     : <MaterialIcons name="visibility-off" style={styles.passwordIcon} />}
               </TouchableOpacity>
            </View>
         </View>
      )
   }

   return (
      <View style={inputStyle}>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.input}>
            <TextInput
               style={styles.textinput}
               textContentType={type}
               onFocus={() => setFocus(true)}
               onBlur={() => setFocus(false)}
               placeholder={placeholder}
               placeholderTextColor="#595f70"
            />
         </View>
      </View>
   )
}
