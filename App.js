/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Header from "./Views/home/header/headerView"
// import Modal from "./Views/component/modal";
import Footer from "./Views/foot/footer";
import Counter from "./lib/Counter";
import TestArt from "./Views/home/testArt";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
          {/*{this.headerView()}*/}
        {/*<TouchableWithoutFeedback onPress={() => {*/}
        {/* this.modalVisible(true)*/}
        {/*}}>*/}
        {/*<View style={{width:100,height:50,backgroundColor: "blue",borderRadius: 20,justifyContent: "center",alignItems: "center"}}>*/}
        {/*  <Text>button</Text>*/}
        {/*</View>*/}
        {/*</TouchableWithoutFeedback>*/}
        {/*  /!*{this.Counter()}*!/*/}
        {/*{this.state.modalVisible && this.modalView()}*/}
        {this.ArtView()}
        <View style={{position: "absolute", bottom:0,marginBottom: 50}}>
            {this.footerView()}
        </View>
      </View>
    );
  }

  modalVisible(visible){
    this.setState({
      modalVisible: visible
    })
  }

  // modalView() {
  //   return(
  //       <Modal onButtonClick = {(visible) => {
  //             this.modalVisible(visible)
  //           }
  //         }
  //       />
  //   )
  // }

  headerView() {
      return(
          <Header/>
      )
  }

  footerView() {
      return (
          <Footer/>
      )
  }

  Counter() {
      return (
          <Counter/>
      )
  }

  ArtView() {
    return (
        <TestArt/>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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
