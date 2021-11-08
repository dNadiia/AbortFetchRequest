import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    title: string;
    color?: string;
    onPress: () => void;
};

export const Button: React.FC<Props> = ({ title, color, onPress }) => (
    <TouchableOpacity
        style={[style.container, { backgroundColor: color }]}
        activeOpacity={0.8}
        onPress={onPress}
    >
        <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
);

const style = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ed1b76',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});
