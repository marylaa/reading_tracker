import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import {AuthProvider} from "./auth/AuthProvider";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App></App>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="register" element={<Signup/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
