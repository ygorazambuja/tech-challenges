import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoComponent({todo, navigation}) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('TodoDetails', {
                    todo,
                });
            }}>
            <View style={stylesWithProps(todo).todoItem}>
                <View style={styles.textArea}>
                    <Text style={styles.todoItemTitle}>{todo.title}</Text>
                    <Text>{todo.description}</Text>
                </View>
                <View>
                    <Icon name="chevron-down" size={24} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const stylesWithProps = (todo) =>
    StyleSheet.create({
        todoItem: {
            flexDirection: 'row',
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            elevation: 5,
            borderRadius: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: todo.done
                ? 'rgba(0, 255, 0, 0.4)'
                : 'rgba(255, 0, 0, 0.4)',
        },
    });

const styles = StyleSheet.create({
    textArea: {
        maxWidth: '90%',
    },
    todoItemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
