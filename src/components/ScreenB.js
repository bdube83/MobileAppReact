import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

class ScreenB extends Component {

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('willFocus', () => console.log('will focus')),
            this.props.navigation.addListener('willBlur', () => console.log('will blur')),
            this.props.navigation.addListener('didFocus', () => console.log('did focus')),
            this.props.navigation.addListener('didBlur', () => console.log('did blur')),
        ];
    }

    componentWillUnmount() {
        this.subs.forEach(s => s.remove());
    }


    render() {
        const { navigation } = this.props;
        const text = navigation.getParam('text', 'no name');

        return (
            <View>
                <Text style={styles.right}>
                    {text}
                </Text>
                <Button title="Navigate to Screen A" onPress={() =>
                    this.props.navigation.goBack()
                }
                />
            </View>
        );
    }
}

export default ScreenB

const styles = StyleSheet.create({
    right: {
        textAlign: 'right', alignSelf: 'stretch'
    }
})
