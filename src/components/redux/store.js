import {combineReducers, configureStore} from "@reduxjs/toolkit";
import zoneReducer from "./reducers/zone";
import foodReducer from "./reducers/food";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
    zones: zoneReducer,
    food: foodReducer
});

const persistConfig = {
    key: 'root-store',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Redux store for React application
 * @type {EnhancedStore<any, AnyAction, [ThunkMiddlewareFor<any>]>}
 */
const store = configureStore({
    reducer: persistedReducer
});

export default store;