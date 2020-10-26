import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import {connect} from 'react-redux';
import {toogleTodo, removeTodo} from '../store/actions/todoActions';
import Snackbar from 'react-native-snackbar';
import DoneAt from '../components/DoneAt';
import CreatedAt from '../components/CreatedAt';

const TodoDetails = (props) => {
    const todo = props.route.params.todo;
    const [toggleCheckBox, setToggleCheckBox] = useState(todo.done);

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.titleText}>{todo.title}</Text>
            </View>
            <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>{todo.description}</Text>
            </View>

            <CreatedAt createdAt={moment(todo.createdAt)} />
            <DoneAt doneAt={moment(todo.doneAt)} />

            <View style={styles.checkBoxBox}>
                <Text style={styles.checkBoxLabel}>Concluida ?</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(value) => {
                        setToggleCheckBox(value);
                        if (value) {
                            todo.doneAt = moment().toISOString();
                        } else {
                            todo.doneAt = '';
                        }
                        props.toogle(todo);
                        Snackbar.show({
                            duration: Snackbar.LENGTH_SHORT,
                            text: value
                                ? 'To Do Marcado como concluido'
                                : 'To Do marcado como não concluido',
                            action: {
                                text: 'Desfazer',
                                textColor: 'yellow',
                                onPress: () => {
                                    setToggleCheckBox(!value);
                                    props.toogle(todo);
                                },
                            },
                        });
                    }}
                />
            </View>
            <View>
                <Button
                    title="Delete"
                    color="#FF5252"
                    onPress={() => {
                        props.remove(todo.key);
                        props.navigation.navigate('Home');
                    }}
                />
            </View>
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
        toogle: (todo) => dispatch(toogleTodo(todo)),
        remove: (key) => dispatch(removeTodo(key)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails);

const styles = StyleSheet.create({
    titleBox: {
        justifyContent: 'center',
    },
    descriptionBox: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'column',
        margin: 10,
        padding: 10,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 18,
        textAlign: 'center',
    },

    checkBoxBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    checkBoxLabel: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 20,
    },
});
