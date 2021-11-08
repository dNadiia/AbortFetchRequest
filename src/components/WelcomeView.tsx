import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
    player: string;
};

export const WelcomeView: React.FC<Props> = ({ player }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{`Welcome ${player}!`}</Text>
        <Text style={styles.emoji}>{'<コ:彡'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#249f9c',
        fontWeight: 'bold',
    },
    emoji: {
        fontSize: 60,
        textAlign: 'center',
        color: '#ed1b76',
        marginVertical: 20,
    },
});
