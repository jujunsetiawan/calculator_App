import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from "./src/screen/auth/splashscreen"
import Home from "./src/screen/dashboard/home"

export class App extends Component {
  render() {
    return (
      <Home/>
    )
  }
}

export default App;
