import React from "react";
import {View,TextInput,Button} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import base64 from "../utils/base64";

interface State {
    label: string,
    email: string,
    password: string
}

const template={
    name: '',
    email: '',
    password: ''
};

const FETCH_KEY="PASSWORD_MANAGER";

export default class AddScreen extends React.Component<any, State>{

    public readonly state: Readonly<State> = {
        label:'',
        email: '',
        password: ''
    }

    render() {
        return(
            <View>

            <TextInput
                value={this.state.label}
                onChange={(e)=>this.setState({label: e.nativeEvent.text})}
                placeholder={"Name"}
                keyboardType="default"
                />

                <TextInput
                    value={this.state.email}
                    onChange={(e)=>this.setState({email: e.nativeEvent.text})}
                    placeholder={"Email"}
                    keyboardType="default"
                />

                <TextInput
                    value={this.state.password}
                    onChange={(e)=>this.setState({password: e.nativeEvent.text})}
                    placeholder={"Password"}
                    keyboardType="default"
                />


                <Button title="Submit" onPress={()=>this.saveData()} />



            </View>
        );
    }


    saveData=async ()=>{
        let data=await AsyncStorage.getItem(FETCH_KEY);
        let arr=[];
        if (data!=null) {
            arr = JSON.parse(data);
        }
            arr.push({
                name: this.state.label,
                email: this.state.email,
                password: base64.encode(this.state.password)
            });
        let finArr=JSON.stringify(arr);
        await AsyncStorage.setItem(FETCH_KEY,finArr);
        console.log(finArr);
    }


}
