import {ADD_TODO, REMOVE_TODO} from './types';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    data: todo,
});

export const removeTodo = (key) => ({
    type: REMOVE_TODO,
    key: key,
});

export const toogleTodo = (todo) => ({
    type: 'TOOGLE_TODO',
    data: todo,
});
