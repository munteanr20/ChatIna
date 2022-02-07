import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
 const InputBox = () => {

    const [message, setMessage] = useState('')
    
    const onSendPress = () => {
        console.warn(message)
        //send message to backend
        setMessage('');
    }
 
    const onPress = () => {
        if(message)
            { onSendPress(); }
    }

    return(
        <View style={styles.container}>
            <View style={styles.maincontainer}>
             <TextInput 
                placeholder={"Scrie un mesaj..."}
                multiline 
                value={message}
                onChangeText={setMessage}
             />
         </View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {
                    !message
                     ? <AntDesign name="message1" size={24} color="white" />
                     : <MaterialIcons name="send" size={28} color="white"/>
                }
            </View>
        </TouchableOpacity>
        </View>
    )
 }

 export default InputBox;