import React from "react"
import { View } from "react-native"
import { styles } from "./style"

import { PostHeader } from "./Header/PostHeader"
import { PostContent } from "./Content/PostContent"
import { PostFooter } from "./Footer/PostFooter"

export const Post = () => {
   return (
      <View style={styles.container}>
         <PostHeader />
         <PostContent/>
         <PostFooter/>
      </View>
   )
}
