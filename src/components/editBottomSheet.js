import React ,{useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-community/async-storage';

const FETCH_KEY="PASSWORD_MANAGER";

const EditBottomSheet=({name,email,password,list,rbRef})=>{
    //const [newName,setNewName]=useState(name);
    const [newEmail,setNewEmail]=useState(email);
    const [newPass,setNewPassword]=useState(password);


    async function onSave(){
        for (let i=0;i<list.length;i++) {
            if(list[i].text===name) {
                list[i].email=newEmail;
                list[i].password=newPass;
            }
        }

        await AsyncStorage.put(FETCH_KEY,JSON.stringify(list))

    }

    return(
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <RBSheet
                ref={ref=>rbRef=ref} height={300} customStyles={{container:{justifyContent: 'center',alignItems: 'center'}}}>
            <Text numberOfLines={1} value={name} />

            <TextInput numberOfLines={1} value={newEmail} onChangeText={text => setNewEmail(text)} />

            <TextInput numberOfLines={1} value={newPass} onChangeText={text => setNewPassword(text)} />

            <Button title={"Submit"} onPress={onSave} />
            </RBSheet>

        </View>
    )

}

export default EditBottomSheet;
