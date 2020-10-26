import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CreatedAt({createdAt}) {
    return (
        <View style={styles.dateBox}>
            <Text style={styles.dateText}>
                Criado em {createdAt.format('dddd, DD MMMM  YYYY')} as{' '}
                {createdAt.format('HH:mm:ss')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dateBox: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    dateText: {
        fontSize: 20,
        textAlign: 'center',
    },
});
