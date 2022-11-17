import React, { useState } from "react"
import { StatusBar, View } from "react-native"
import { Home } from "./src/screens/Home"
import { Login } from "./src/screens/Login/index"

export default function App() {
   const [isLogged, setIsLogged] = useState(false)

   function handleIsLogged() {
      setIsLogged(currentState => !currentState)
   }

   return (
      <>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor={"#22222200"} />
         {isLogged ? <Home login={handleIsLogged}/> : <Login login={handleIsLogged}/>}
      </>
   )
}
