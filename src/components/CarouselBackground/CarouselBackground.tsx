import React from "react"
import { ImageBackground } from "react-native"

import carousel1 from "../../assets/images/imagensCarousel/sumeru.png"
import carousel2 from "../../assets/images/imagensCarousel/ganyu.png"
import carousel3 from "../../assets/images/imagensCarousel/yae.jpg"
import { styles } from "./style"

export const CarouselBackground = ({ background }) => {
  return (
    <ImageBackground source={
      background == 0 ? carousel1
        : background == 1 ? carousel2
          : background == 2 ? carousel3
            : null}
      style={styles.backgroundImg}
      blurRadius={10}
      resizeMode="cover"
    />
  )
}