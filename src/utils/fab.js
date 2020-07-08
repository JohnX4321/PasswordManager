import {FloatingAction} from 'react-native-floating-button';
import React from 'react';

const actions=[
    {
        text: 'Edit',
        icon: require(''),
        name: 'bt_edit',
        position: 2
    },
    {
        text: 'Delete',
        icon: require(''),
        name: 'bt_del',
        position: 1
    }
];


const FAB=({name,email,password,handleEdit,handleDelete})=>{


    return(
    <FloatingAction
        actions={actions}
        onPressItem={name=>{
            if (name==='bt_edit')
                handleEdit(name,email,password);
            else if(name==='bt_del')
                handleDelete(name);
        }}
    />

        );

}
