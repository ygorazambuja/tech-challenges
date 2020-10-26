import {ADD_TODO, REMOVE_TODO, TOOGLE_TODO} from '../actions/types';
import moment from 'moment';

const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    key: action.data.key,
                    title: action.data.title,
                    description: action.data.description,
                    done: action.data.done,
                    createdAt: moment().toISOString(),
                    doneAt: action.data.doneAt,
                }),
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.key !== action.key),
            };
        case TOOGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.key === action.data.key
                        ? {
                              ...todo,
                              done: !todo.done,
                              doneAt: action.data.doneAt,
                          }
                        : todo,
                ),
            };
        default:
            return state;
    }
};

export default todosReducer;
