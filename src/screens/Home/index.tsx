import React from "react"
import { View, ScrollView } from "react-native"
import { styles } from "./styles"

import { Header } from "../../components/Header/Header"
import { CarouselHome } from "../../components/Carousel/Carousel"
import { Post } from "../../components/Post/Post"
import { NavBar } from "../../components/NavBar/NavBar"

export const Home = ({ login }) => {
   function kindOfLogOut() {
      login()
   }

   return (
      <View style={styles.container}>
         <Header />

         <ScrollView style={styles.content}>
            <CarouselHome />
            <Post />
            <Post />
            <Post />
         </ScrollView>

         <NavBar logOut={kindOfLogOut} />
      </View>
   )
}
