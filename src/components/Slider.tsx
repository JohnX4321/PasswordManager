import React from "react";
import {View,StyleSheet,Text,Dimensions} from "react-native";
import Animated from 'react-native-reanimated';
import {onScrollEvent} from 'react-native-redash';
import {Phone} from './Phones';


interface SliderProps {
    phones: Phone[],
    slider: Animated.Value<number>
}

const {width}=Dimensions.get("window");
export const SEG_WIDTH=width/2;

export default ({phones,slider: x}: SliderProps)=>(
    <View>
        <Animated.ScrollView
            scrollEventThrottle={1}
            onScroll={onScrollEvent({x})}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {phones.map((_,i)=>{
                const year=`${1990+i*5}`;
                return(
                    <View key={year} style={styles.container}>
                        <View style={styles.dents}>
                            <View style={styles.firstDent} />
                            <View style={styles.smallDent} />
                            <View style={styles.smallDent} />
                            <View style={styles.smallDent} />
                            <View style={styles.bigDent} />
                        </View>
                        <View style={styles.year}>
                            <Text>{year}</Text>
                        </View>
                    </View>
                );
            })}
        </Animated.ScrollView>
    </View>
);

const styles=StyleSheet.create({
    container:{
        width: SEG_WIDTH
    },
    dents:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    firstDent: {
        backgroundColor: "transparent",
        width: 5,
        height: 35
    },
    smallDent: {
        backgroundColor: "black",
        width: 5,
        height: 35
    },
    bigDent: {
        backgroundColor: "black",
        width: 10,
        height: 70
    },
    year: {
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});
