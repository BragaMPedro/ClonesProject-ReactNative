import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style";

export interface ButtonSecondaryProps{
   value?: string;
   onPress?: (e:any) => void;
}

export const ButtonSecondary = ({value, onPress}:ButtonSecondaryProps) => {
 
   return (
      <TouchableOpacity style={styles.btnFollow} onPress={onPress}>
         <Text style={styles.title}>{value}</Text>
      </TouchableOpacity>
   )
}
