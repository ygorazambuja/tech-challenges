import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../store/actions/todoActions';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import CreatedAt from '../components/CreatedAt';
import Snackbar from 'react-native-snackbar';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({
        key: uuidv4(),
        title: '',
        description: '',
        createdAt: moment(),
        doneAt: '',
        done: false,
    });

    const validateFields = () => {
        if (todo.title.trim() === '') {
            Snackbar.show({
                text: 'Titulo não pode ser vazio',
                duration: Snackbar.LENGTH_SHORT,
            });
            return false;
        }
        return true;
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Titulo'}
                onChangeText={(e) => setTodo({...todo, title: e})}
                style={styles.inputField}
            />
            <TextInput
                placeholder={'Descrição'}
                onChangeText={(e) => setTodo({...todo, description: e})}
                style={styles.inputField}
            />
            <CreatedAt createdAt={moment(todo.createdAt)} />
            <Button
                title="Add"
                onPress={() => {
                    if (validateFields()) {
                        props.add(todo);
                        props.navigation.navigate('Home');
                    }
                }}
            />
        </View>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todosReducer.todos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: (todo) => dispatch(addTodo(todo)),
    };
};

const styles = StyleSheet.create({
    inputField: {
        fontSize: 20,
        padding: 20,
        borderWidth: 0.9,
        borderRadius: 25,
        margin: 20,
    },
    container: {
        padding: 20,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
