import React,{useState} from 'react';
import CardView from 'react-native-cardview';
import {Text, TouchableOpacity, View} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import base64 from '../utils/base64';

const defaultText="*******************************************";
const Block=({title,email,password})=>{

    const [show,setShow]=useState(false);
    const [text,setText]=useState(base64.decode(password))
    return (

    <CardView
        cardElevation={4}
        cardMaxElevation={4}
        cornerRadius={5}

        style={{position: "relative"}}
        >

        <View style={{flex: 1,flexDirection: 'column', width: '100%',margin: 10}}>


            <View stye={{flex: 1,flexDirection: 'row'}}>
                <Text style={{fontSize: 28}}>
                    {title}
                </Text>

                <Text style={{fontSize: 18}}>
                    {email}
                </Text>

            </View>

            <View style={{flex: 1,flexDirection: 'row',marginTop: 10}}>
                <Text>
                    {show?text:defaultText}
                </Text>

                <TouchableOpacity style={{width:30,height: 30,marginLeft: 10}} onPress={handleShow}>
                <FIcon
                    name={show?'eye-off':'eye'}
                    size={24}
                    color="black"/>

                </TouchableOpacity>


            </View>


        </View>

    </CardView>
);

    function handleShow() {

        setShow(!show);




    }

}

export default Block;
