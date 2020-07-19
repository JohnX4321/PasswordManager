import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, SafeAreaView, Dimensions} from "react-native";
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
    currPassword: string,
    loading: boolean
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
            currPassword: '',
            loading: true
        }
    }

    componentDidMount=async ()=> {
        this.data=await AsyncStorage.getItem(FETCH_KEY)

        if (this.data.length>0&&this.data!=null) {
            this.setState({data: JSON.parse(this.data),loading: false});

        }


    }

    render() {

        if (this.state.loading)
            return (<Text>Loading</Text>)

        return(





            <SafeAreaView style={styles.containerSafeArea}>
                <Text>LIST</Text>

                <View style={styles.container}>
                {
                    this.state.data.map((val,i)=>(
                        <View style={{height: 125,padding: 5}}>
                            <Block email={val.email} password={val.password} title={val.name} key={i}/>
                        </View>
                    ))
                }
                </View>




            </SafeAreaView>

        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        padding:5,
        position: 'relative',

    },
    containerSafeArea:{
        flex: 1,
        position: 'relative',
        backgroundColor: '#f5fcff'
    }
})

/*<EditBottomSheet
                    rbRef={this.bottomSheetRef}
                    name={this.state.currTitle}
                    email={this.state.currEmail}
                    list={this.state.data}
                    password={this.state.currPassword} />
*/

