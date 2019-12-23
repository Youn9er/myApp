import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ART
} from 'react-native';

const { Path, Surface, Group, Shape } = ART;

class Circle extends Component {
    render() {
        const { radius, ...rest } = this.props;

        const circle = Path()
            .move(radius, 0)
            .arc(0, radius * 2, radius)
            .arc(0, radius * -2, radius)

        return <Shape {...rest} d={circle} />;
    }
}
export default class TestArt extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Surface width={200} height={200}>
                    {/*<Group x={0} y={0}>*/}
                        <Circle radius={100} fill='#f2f' />
                    {/*</Group>*/}
                </Surface>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
    },
});
