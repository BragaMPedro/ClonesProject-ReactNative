import React from "react"
import { View } from "react-native"
import { styles } from "./style"

export const PageMarker = ({ selected, index }) => {

  return (
    <View style={selected === index ? styles.pageMarkerSelected : styles.pageMarker} />
  )
}