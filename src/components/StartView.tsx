import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from './Button';

type Props = {
    onStart: () => void;
};

export const StartView: React.FC<Props> = ({ onStart }) => (
    <View style={styles.container}>
        <Text style={styles.text}>&#9675;&#9653;&#9633;</Text>
        <Button title={'Start'} color={'#249f9c'} onPress={onStart} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    text: {
        height: 100,
        fontSize: 70,
        textAlign: 'center',
    },
});
