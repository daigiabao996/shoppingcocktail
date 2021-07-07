import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const onLogin = (e) => {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem("isLogin", true);
            history.push("/");
        }
        else {
            alert('FAILED - TRY ANOTHER USERNAME OR PASSWORD');
        }
        e.preventDefault();
    };
    const handleSetUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="username" onChange={handleSetUsername} />
                    <input type="password" placeholder="password" onChange={handleSetPassword} />
                    <button type="submit" onClick={onLogin}>login</button>
                </form>
            </div>
        </div>
    );
}
export default Login;