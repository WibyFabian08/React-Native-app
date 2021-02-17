import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class CounterClass extends React.Component {
    state = {
        number: 0
    }

    tambah = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    kurang = () => {
        if(this.state.number >= 1) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    render() {
        return(
            <View style={{marginTop: 20}}>
                <Text style={styles.title}>Class Component State</Text>
                <View>
                    <Text style={styles.number}>{this.state.number}</Text>
                    <Button title='Tambah' onPress={() => this.tambah()}></Button>
                    <View style={{marginTop: 10}}>
                        <Button title='Kurang' onPress={() => this.kurang()}></Button>
                    </View>
                </View>
            </View>
        )
    }
}

const Counter = () => {
    const [number, setNumber] = useState(0);
    
    function addNumber() {
        setNumber(number + 1);
    }
    
    function minNumber() {
        if(number >= 1) {
            setNumber(number -1);
        }
    }

    return (
        <View>
            <Text style={styles.number}>{number}</Text>
            <Button title='Tambah' onPress={() => addNumber()}></Button>
            <View style={{marginTop: 10}}>
                <Button title='Kurang' onPress={() => minNumber()}></Button>
            </View>
        </View>
    )
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Functional Component State</Text>
            <Counter></Counter>
            <CounterClass></CounterClass>
        </View>
    );
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    number: {
        textAlign: 'center',
        padding: 10,
    }
});