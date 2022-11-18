import React, { useState } from "react"
import { View, ScrollView } from "react-native"
import { styles } from "./styles"

import { Header } from "../../components/Header/Header"
import { CarouselHome } from "../../components/Carousel/Carousel"
import { Post } from "../../components/Post/Post"
import { NavBar } from "../../components/NavBar/NavBar"
import { CarouselBackground } from "../../components/CarouselBackground/CarouselBackground"

export const Home = ({ login }) => {
   const [currentCarroussel, setCurrentCarroussel] = useState(0);

   function kindOfLogOut() {
      login()
   }

   return (
      <View style={styles.container}>
         <Header />

         <ScrollView style={styles.scrollContainer} centerContent contentContainerStyle={styles.content}>
            <CarouselHome currentPage={currentCarroussel} setCurrentPage={setCurrentCarroussel} />
            <CarouselBackground background={currentCarroussel} />
            <Post />
            <Post />
            <Post />
         </ScrollView>

         <NavBar logOut={kindOfLogOut} />
      </View>
   )
}
