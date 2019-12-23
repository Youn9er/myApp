/**
 * @Author: Younger
 * @Date: 2019-05-22
 * @Time: 23:41
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

type Props = {};
export default class Modal extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 270,height: 140,borderRadius:20,backgroundColor: "#fff",justifyContent: "space-between",alignItems: "center" ,overflow: "hidden",borderColor: "#010101",borderWidth: 1,}}>
                    <Text style={{marginTop:20, fontSize: 20}}>My Devotion</Text>
                    <Text style={{fontSize: 16}}>My whole life</Text>
                    <View style={{flexDirection: "row", width: "100%", height:50, borderTopColor: "#F2F2F4",borderTopWidth: 1,}}>
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.onButtonClick(false)
                        }}>
                            <View style={{width: "50%",height: "100%", backgroundColor: "#fff", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#4a4a4a",fontSize:16,fontFamily:'PingFangSC-Regular'}}>cancel</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.onButtonClick(false)
                        }}>
                            <View style={{width: "50%",height: "100%", backgroundColor: "#fff", alignItems: "center",justifyContent: "center"}}>
                                <Text style={{color: "#393939",fontSize:16,fontFamily:'PingFangSC-Semibold'}}>ok</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
