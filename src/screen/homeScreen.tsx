import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, View} from "react-native";
import Block from "../components/block";
import RBSheet from 'react-native-raw-bottom-sheet';
import EditBottomSheet from "../components/editBottomSheet";


const template={
    name: '',
    email: '',
    password: ''
};

const FETCH_KEY="PASSWORD_MANAGER";

interface StateSingle {
    name: string,
    email: string,
    password: string
}

interface State {
    data: StateSingle[],
    currEmail: string,
    currTitle: string,
    currPassword: string
}

export default class HomeScreen extends React.Component<void, State>{

    data: any=''
    bottomSheetRef=React.createRef<RBSheet>()

    constructor() {
        super();
        this.state={
            data: [],
            currEmail: '',
            currTitle: '',
            currPassword: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem(FETCH_KEY)
                .then((res)=>this.data=res);
        if (this.data!=null) {
            this.setState({data: JSON.parse(this.data)});
        }

    }

    render() {
        return(

            <View style={styles.container}>

                {
                    this.state.data.map((val,i)=>(
                        <Block email={val.email} password={val.password} title={val.name} />
                    ))
                }


                <EditBottomSheet
                    rbRef={this.bottomSheetRef}
                    name={this.state.currTitle}
                    email={this.state.currEmail}
                    list={this.state.data}
                    password={this.state.currPassword} />


            </View>

        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    }
})

