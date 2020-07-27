import React ,{useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View,ToastAndroid} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-community/async-storage';

const FETCH_KEY="PASSWORD_MANAGER";

const EditBottomSheet=({index,list,update})=>{
    //const [newName,setNewName]=useState(name);
    const [newEmail,setNewEmail]=useState(list[index].email);
    const [newPass,setNewPassword]=useState(list[index].password);


    async function onSave(){
        //for (let i=0;i<list.length;i++) {
        //    if(list[i].text===name) {
                list[index].email=newEmail;
                list[index].password=newPass;
        //    }
        //}

        await AsyncStorage.setItem(FETCH_KEY,JSON.stringify(list)).then(()=>{update()})
        ToastAndroid.show("Updated Successfully",ToastAndroid.SHORT);

    }


    async function onDelete() {

        list.splice(index,1)
        await AsyncStorage.setItem(FETCH_KEY,JSON.stringify(list)).then(()=>{update()});
        ToastAndroid.show("Deleted Successfully",ToastAndroid.SHORT);
    }

    return(
            <View>
            <Text numberOfLines={1}>{list[index].name}</Text>

            <TextInput numberOfLines={1} style={{borderBottomWidth: 1,borderBottomColor: "#000000"}} value={newEmail} onChangeText={text => setNewEmail(text)} />

            <TextInput numberOfLines={1} style={{borderBottomWidth: 1,borderBottomColor: "#000000"}} value={newPass} onChangeText={text => setNewPassword(text)} />

            <TouchableOpacity style={{margin: 20}} onPress={onDelete}>
                <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}} onPress={onSave}>
                <Text>Save</Text>
            </TouchableOpacity>
            </View>

    )

}

export default EditBottomSheet;
