import React, {useEffect}  from "react";
import {StyleSheet, Text, View} from 'react-native'
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import io from "socket.io-client";
import HomeScreen from "./screens/HomeScreen";

export default function App{

  //useEffect(//functionName,//parameters);
  useEffect(function(){
    io("http://192.168.0.124:3001")
  },[]);


  return(
   <HomeScreen/>
  )
}