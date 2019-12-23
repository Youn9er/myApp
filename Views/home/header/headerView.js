/**
 * @Author: Younger
 * @Date: 2019-06-13
 * @Time: 13:31
 * @Description: Header
 */
import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import Scan from "./component/ScanView";
import Search from "./component/SearchView";
import News from "./component/NewsView";

type Props = {};
class Header extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(): void {

    }

    render() {
        return (
            <View style={styles.container}>
                {this.ScanView()}
                {this.SearchView()}
                {this.NewsView()}
            </View>
        )
    }

    ScanView() {
        return(
            <Scan/>
        )
    }

    SearchView() {
        return(
            <Search/>
        )
    }

    NewsView() {
        return(
            <News/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // paddingLeft: 4,
        // paddingRight: 4,
        justifyContent: "space-between"

    }
})

export default Header;
