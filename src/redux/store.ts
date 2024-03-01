import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import rootReducer from "./reducers";
import 'react-redux'

const reducers = combineReducers(rootReducer);

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["auth", "groups", "configs"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare(
            {
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }
        ),
});
const persistor = persistStore(store);

export const useDispatch = () => store.dispatch;
export type State = ReturnType<typeof reducers>;

declare module "react-redux" {
    export interface DefaultRootState extends State { }
}

export { persistor };
export default store;
