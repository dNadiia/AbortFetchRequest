import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from './Button';

type Props = {
    onCancel: () => void;
};

export const LoadingView: React.FC<Props> = ({ onCancel }) => (
    <View style={styles.container}>
        <ActivityIndicator
            style={styles.progress}
            size={'large'}
            animating={true}
        />
        <Button title={'Cancel'} color={'#ed1b76'} onPress={onCancel} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    progress: {
        height: 100,
    },
});
