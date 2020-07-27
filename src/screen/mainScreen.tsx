import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MyTabs from "../utils/bottomTabs";

export default class MainScreen extends React.Component<null, null>{

    render() {
        return(
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>

        );
    }

}
