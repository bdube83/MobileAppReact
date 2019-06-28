import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, TextInput, Text, Button } from 'react-native';

import { addName } from '../actions/input';
import RNEmulatorCheck from 'react-native-emulator-check'



class Home extends Component {

  static navigationOptions = () => ({
    title: 'Welcome'
  })


    state = {
        NameInput: "Please type your name"
    }

    componentDidMount() {
        this._interval = setInterval(this.periodicUpdate, 1000);
    }
    _interval = null

    periodicUpdate = () => {
        if (this.props.navigation.state.params.active) {
            console.log('Active!');
        }
    }


    render() {
        const { addName, navigation } = this.props;
        return (
            <View>
                <TextInput onChangeText={text => this.setState({ NameInput: text })} value={this.state.NameInput} />
                <Button title="Navigate to Screen A" onPress={() => {
                    navigation.navigate('ScreenA', {
                        text: this.state.NameInput,
                    });
                    addName(this.state.NameInput);

                }
                }
                />

                <Text>
                    is emulator: {RNEmulatorCheck.isEmulator().toString()}
                </Text>
            </View>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addName: (text) => dispatch(addName(text))
    };
};


export default connect(null,mapDispatchToProps)(Home);

