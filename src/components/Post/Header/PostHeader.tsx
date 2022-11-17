import { View, Text, Image } from "react-native"
import { styles } from "./style"
import { ButtonSecondary } from "../../ButtonFollow/Button"
import userAvatar from "../../../assets/images/avatars/beidou.png"

export const PostHeader = () => {
   return (
      <View style={styles.container}>
         <View style={styles.userContainer}>
            <Image source={userAvatar} style={styles.userAvatar} />
            <View style={{ alignContent: "center" }}>
               <Text style={styles.userName}>Vampirata123</Text>
               <Text style={styles.postInfo}>05/11 - Genshin Impact</Text>
            </View>
         </View>
         <ButtonSecondary value="Seguir" />
      </View>
   )
}
