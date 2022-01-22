import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import Tabs from "./components/tabs/tabs";
import Profile from "./components/profile/profile";
import UsersContainer from "./components/users/UsersContainer";

function App() {

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <Tabs/>
                <div className='content-wrapper'>
                    <div className='content'>
                        <Provider store={store}>
                            <Routes>
                                <Route exact path="/" element={<Profile/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                            </Routes>
                        </Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
