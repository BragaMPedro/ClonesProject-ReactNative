import { View, Image, ImageBackground } from "react-native"
import Carousel from "react-native-carousel-loop/lib"
import { PageMarker } from "../PageMarker/PageMarker"
import { styles } from "./style"

import carousel1 from "../../assets/images/imagensCarousel/sumeru.png"
import carousel2 from "../../assets/images/imagensCarousel/ganyu.png"
import carousel3 from "../../assets/images/imagensCarousel/yae.jpg"

export const CarouselHome = ({ currentPage, setCurrentPage }) => {

   function handlePageMarker(index: number) {
      setCurrentPage(index)
   }

   return (
      <View style={{ alignItems: "center" }}>
         <Carousel style={styles.carrosselContainer} delay={7000} onAnimateNextPage={handlePageMarker} autoplay isLooped swipe >
            <Image source={carousel1} style={styles.img} resizeMode="cover" />
            <Image source={carousel2} style={styles.img} resizeMode="cover" />
            <Image source={carousel3} style={styles.img} resizeMode="cover" />
         </Carousel>
         <View style={styles.pageMarkerContainer}>
            <PageMarker selected={currentPage} index={0} />
            <PageMarker selected={currentPage} index={1} />
            <PageMarker selected={currentPage} index={2} />
         </View>
      </View>
   )
}
