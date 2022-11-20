import React from "react"
import { ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"

import carousel1 from "../../assets/images/imagensCarousel/sumeru.png"
import carousel2 from "../../assets/images/imagensCarousel/ganyu.png"
import carousel3 from "../../assets/images/imagensCarousel/yae.jpg"

export const CarouselBackground = ({ background }) => {
   return (
      <ImageBackground
         source={background == 0 ? carousel1 : background == 1 ? carousel2 : background == 2 ? carousel3 : null}
         style={styles.backgroundImg}
         blurRadius={10}
         resizeMode="cover">
         <LinearGradient style={{height:"100%"}} colors={["transparent", "#0C0F1E"]} />
      </ImageBackground>
   )
}
