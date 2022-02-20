import {combineReducers, configureStore} from "@reduxjs/toolkit";
import zoneReducer from "./reducers/zone";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
    zones: zoneReducer
});

const persistConfig = {
    key: 'root-store',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer
});

export default store;