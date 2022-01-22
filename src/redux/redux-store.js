import {combineReducers, createStore} from "redux";
import usersReducer from './users-reducer';
import interestsReducer from "./interests-reducer";
import profileInfoReducer from "./profileInfo-reducer";

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        return undefined
    }
};

let reducers = combineReducers({
    profileInfo: profileInfoReducer,
    interests: interestsReducer,
    users: usersReducer
});

const store = createStore(reducers, {profileInfo:loadFromLocalStorage()});

store.subscribe(() => {
    saveToLocalStorage(store.getState().profileInfo);
});
export default store;