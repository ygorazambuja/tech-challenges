import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import 'moment/locale/pt-br';

const Stack = createStackNavigator();

import Home from './pages/Home';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="NewTodo"
                    component={NewTodo}
                    options={{
                        title: 'Novo To Do',
                        headerStyle: {
                            backgroundColor: 'transparent',
                            elevation: 0,
                        },
                    }}
                />
                <Stack.Screen
                    name="TodoDetails"
                    component={TodoDetails}
                    options={{
                        title: 'Detalhes',
                        headerStyle: {
                            backgroundColor: 'transparent',
                            elevation: 0,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
