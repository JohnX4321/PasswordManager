import React from "react";
import * as PropTypes from 'prop-types';
import {Alert} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Actions} from 'react-native-router-flux';

export default class FingerprintScreen extends React.Component {


    componentDidMount() {
        FingerprintScanner.authenticate({description: 'Scan your fingerprint to continue'})
            .then(()=>{
                Actions.mainScreen()
                Alert.alert('Authenticated successfully')
            }).catch((e)=>{
                Alert.alert(e.message);
        });
    }

    render() {
        return false;
    }

}
