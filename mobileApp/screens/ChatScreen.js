
import React from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Header } from "react-navigation-stack";
import {useDispatch,useSelector} from "react-redux";




export default function ChatScreen({}){
const dispatch = useDispatch();
  const selfUser = useSelector(state => state.selfUser);
  const conversations = useSelector(state => state.conversations);
  const userId = navigation.getParam("userId");
  const messages = conversations[userId].messages;
 

  return(
      <View style={{flex:1}}>
        <GiftedChat
            messages={messages}
            onsSend={messages=>{
                dispatch({ 
                    type:"private_message"
                    data:{message: ,conversationId: userId}
                })
            }}

        />
      </View>
  )
}