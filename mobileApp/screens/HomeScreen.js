
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://192.168.0.10:3001");
    socket.current.on("message", message => {
      setRecvMessages(prevState => [...prevState,message]);
      setRecvMessages([
        {
          _id:1,
          text:"hello revanth",
          createdAt: new Date(),
          user: {
            _id:34132123,
            name:"mike",
            avatar:"https://lapaas.com/wp-content/uploads/2021/03/Shahrukh-Khan-Most-Successful-Entrepreneur-of-Bollywood.jpg"
          }
        }
      ])
    });
  }, []);

  const onSend = messages => {
    console.log(messages);
   // socket.current.emit("message", messages[0].text);
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={recvMessages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}