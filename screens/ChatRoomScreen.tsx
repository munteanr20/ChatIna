import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage/indesx";
import { ImageBackground } from "react-native";
import BG from '../assets/images/BG.jpg';
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {

    const route=useRoute();
    
    console.log(route.params)

    return(
        <ImageBackground style={{width: '100%', height:'100%'}} source={BG}>
        <FlatList
            style = {{height: '100%'}}
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted
        />

        <InputBox/>
        </ImageBackground>
    );
}

export default ChatRoomScreen;