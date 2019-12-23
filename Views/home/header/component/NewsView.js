/**
 * @Author: Younger
 * @Date: 2019-06-13
 * @Time: 18:39
 * @Description: News
 */
import React, { Component } from "react";
import { Text, View, StyleSheet, Image} from "react-native";

class NewsView extends Component<Props>{
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    };

    componentDidMount(): void {

    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../../images/home_news_notice.png")}></Image>
                <Text style={styles.text}>消息</Text>
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
    image: {
        height: 20,
        width: 20
    },
    text: {
        fontSize: 12,
        fontFamily: "PingFangSC-regular",
        color: "#555",
    }
})

export default NewsView;
