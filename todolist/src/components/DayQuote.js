import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import api from '../services/quoteApi';

export default function DayQuote() {
    const [quote, setQuote] = useState({});

    const loadData = async () => {
        const {data} = await api.get('');
        setQuote(data.contents.quotes[0]);
    };
    useEffect(() => {
        loadData();
    }, [0]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Day Quote</Text>
            <Text style={styles.quote}>{quote.quote}</Text>
            <Text style={styles.author}>{quote.author}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quote: {
        textAlign: 'center',
    },
    author: {
        textAlign: 'right',
        fontSize: 12,
        fontStyle: 'italic',
    },
});
