/**
 * @Author: Younger
 * @Date: 2019-05-22
 * @Time: 23:41
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import {Dimensions} from 'react-native'
import { footer } from "../config/config"

const {height,width} =  Dimensions.get('window');
// const Dimensions = require('Dimensions');
console.log("foot===", footer);


type Props = {};
export default class Footer extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("foot===", footer);
        return (
            <View style={styles.container}>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../images/home_unChecked.png")} style={{width:24, height:24}}></Image>
                    <Text style={styles.text}>首页</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../images/news_unChecked.png")} style={{width:24, height:24}}></Image>
                    <Text style={styles.text}>消息</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../images/shopping_cart_unChecked.png")} style={{width:24, height:24}}></Image>
                    <Text style={styles.text}>购物车</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../images/user_unChecked.png")} style={{width:24, height:24}}></Image>
                    <Text style={styles.text}>我的</Text>
                </View>
            </View>
        );
    }

    footerView(){
        let footerItemView = "";
        footerItemView = foot.map(item => {
            console.log("item===",item);
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: 44,
        backgroundColor: "#f8f8f8",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontFamily: "PingFangSC-regular",
        color: "#9d9d9d"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
