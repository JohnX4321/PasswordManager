import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Button} from "react-native";
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
    selIndex: number,
    loading: boolean,
    edit: boolean
}

export default class HomeScreen extends React.Component<void, State>{

    data: any=''
    bottomSheetRef=React.createRef<RBSheet>()

    constructor() {
        super();
        this.state={
            data: [],
            selIndex: 0,
            loading: true,
            edit: false
        }
    }

    componentDidMount=async ()=> {
        this.data=await AsyncStorage.getItem(FETCH_KEY)

        if (this.data.length>0&&this.data!=null) {
            this.setState({data: JSON.parse(this.data),loading: false});

        }




    }


    // @ts-ignore
    showBottomSheet=()=> {

        this.bottomSheetRef.current?.open();
            this.setState({edit: true})
    };

    render() {

        if (this.state.loading)
            return (<Text>Loading</Text>)

        return(





            <SafeAreaView style={styles.containerSafeArea}>
                <Text>LIST</Text>

                <View style={styles.container} >
                {
                    this.state.data.map((val,i)=>(
                        <TouchableOpacity style={{height: 125,padding: 5}} onLongPress={()=>{
                            this.setState({selIndex: i})
                            this.showBottomSheet();
                        }}>
                            <Block email={val.email} password={val.password} title={val.name} key={i}/>
                        </TouchableOpacity>
                    ))
                }
                </View>




                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <RBSheet
                        ref={this.bottomSheetRef} height={300} customStyles={{container:{justifyContent: 'center',alignItems: 'center'}}}>
                        <EditBottomSheet
                            index={this.state.selIndex}
                            list={this.state.data}
                        update={()=>{this.forceUpdate();
                        this.bottomSheetRef.current?.close();
                        }}/>

                    </RBSheet>

                </View>












            </SafeAreaView>

        )
    }

}
/**/

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



