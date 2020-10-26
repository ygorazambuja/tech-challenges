import {createStore} from 'redux';
import rootReducer from './reducers';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: 'rootReducer',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
