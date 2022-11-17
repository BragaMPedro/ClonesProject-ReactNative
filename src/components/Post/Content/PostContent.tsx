import { View, Text, Image } from "react-native"
import { styles } from "./style"

import imgPost1 from "../../../assets/images/imagensPost/bei2.jpg"
import imgPost2 from "../../../assets/images/imagensPost/zuzu.jpg"
import imgPost3 from "../../../assets/images/imagensPost/yelan.jpg"

export const PostContent = () => {
   return (
      <View style={styles.container}>
            <Text numberOfLines={2} style={styles.title}>
               Diário de wafus #4
            </Text>
            <Text numberOfLines={2} style={styles.postPreview}>
               Hoje caminhei por Sumeru, vi muitas coisas. Vi um cão, vi um cogumelo, vi uma flor, vi outra flor, vi uma
               flor azul, a flor tentou me comer, corri da flor, vi outro cogumelo, vi um gatinho gigante.
            </Text>
            <View style={styles.imgContainer}>
               <Image source={imgPost1} resizeMode="cover" resizeMethod="resize" style={styles.images} />
               <Image source={imgPost2} resizeMode="cover" resizeMethod="resize" style={styles.images} />
               <Image source={imgPost3} resizeMode="cover" resizeMethod="resize" style={styles.images} />
            </View>

            <View style={styles.tagsContainer}>
               <Text style={styles.tags}>#Sumeru</Text>
               <Text style={styles.tags}>#NemBarbatosSalva</Text>
            </View>
         </View>
   )
}
