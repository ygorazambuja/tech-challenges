import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DoneAt({doneAt}) {
    return (
        <View>
            {doneAt.isValid() && (
                <View style={styles.dateBox}>
                    <Text style={styles.dateText}>
                        Concluido em {doneAt.format('dddd, DD MMMM  YYYY')} as{' '}
                        {doneAt.format('HH:mm:ss')}
                    </Text>
                </View>
            )}
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
