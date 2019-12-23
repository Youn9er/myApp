/**
 * @Author: Younger
 * @Date: 2019-06-13
 * @Time: 18:27
 * @Description: search
 */
import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet} from "react-native";

class SearchView extends Component<Props>{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    componentDidMount(): void {

    }

    render() {
        return(
            <View>
                <TextInput style={styles.textInput} placeholder="搜索商品，共4411款好物" placeholderTextColor={"#858585"}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 249
    },
    textInput: {
        width: 248,
        height: 30,
        borderColor: "#ECECEC",
        borderWidth: 1
    }
})

export default SearchView;
