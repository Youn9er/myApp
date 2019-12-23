/**
 * @Author: Younger
 * @Date: 2019-06-13
 * @Time: 13:47
 * @Description: 扫一扫
 */
import React, { Component } from "react";
import { Text, View, StyleSheet, Image} from "react-native";

class ScanView extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };

    componentDidMount(): void {

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../../../images/home_header_scan.png")} style={styles.image}></Image>
                <Text style={styles.text}>扫一扫</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 45,
        width: 45,
        alignItems: "center"
    },
    text: {
        fontSize: 12,
        fontFamily: "PingFangSC-regular",
        color: "#555",
    },
    image: {
        height: 20,
        width: 20
    }
})

export default ScanView;
