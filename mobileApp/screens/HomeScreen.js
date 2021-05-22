import React, {useEffect,useState,useRef}  from "react";
import {StyleSheet, Text, View} from 'react-native'
import io from "socket.io-client";

export default function HomeScreen{

    const [messageToSend,setMessageToSend] = useState("");
    const [recvMessages, setRecvMessages] = useState([]);
    const socket = useRef(null);

//implementing a side effect
  useEffect(() =>{
    socket.current = io("http://192.168.0.124:3001");
    socket.current.on("message", message=> {
        setRecvMessages(prevState => [...prevState,message]);
    })
  },[]);

  //submit message function
  const sendMessage = () => {
    socket.current.emit('message',messageToSend);
    setMessageToSend("")
  }

  const textOfRecMessages = recvMessages.map(msg => (
      <Text key={msg}>{msg}</Text>
  ))


  return(
      <view style={styles.container}>

      <Text>Hello!</Text>
      <TextInput 
      value={messageToSend} 
      onChangeText={text => setMessageToSend(text)} 
      placeholder="Enter your message"
      onSubmitEditing = {sendMessage}
      />
       
      </view>
    
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"center"
    }

})