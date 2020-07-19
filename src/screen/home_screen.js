import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View} from "react-native";
import Block from "../components/block";
import RBSheet from 'react-native-raw-bottom-sheet';
import EditBottomSheet from "../components/editBottomSheet";



const template={
    name: '',
    email: '',
    password: ''
};

const FETCH_KEY="PASSWORD_MANAGER";



export default class HomeScreen extends React.Component{

    _isMounted=false;
    data=''
    bottomSheetRef=React.createRef()

    constructor() {
        super();
        this.state={
            data: [],
            currEmail: '',
            currTitle: '',
            currPassword: '',
            loading: true
        }
    }

    componentDidMount() {
        this._isMounted=true;
        AsyncStorage.getItem(FETCH_KEY).then(res=>{

                this.data=res;
            if (this.data.length>0&&this.data!=null) {
                this.setState({data: JSON.parse(this.data),loading: false});

            }
        })




    }

    componentWillUnmount() {
        this._isMounted=false;
    }

    render() {

        if (this.state.loading)
            return (<Text>Loading</Text>)
        else
            return(





            <View style={styles.container}>
                <Text>LIST</Text>

                {
                    this.state.data.map((val,i)=>(
                        <View style={{height: 500}}>
                            <Block email={val.email} password={val.password} title={val.name} key={i}/>
                        </View>
                    ))
                }




            </View>

        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    }
})

/*<EditBottomSheet
                    rbRef={this.bottomSheetRef}
                    name={this.state.currTitle}
                    email={this.state.currEmail}
                    list={this.state.data}
                    password={this.state.currPassword} />
*/

