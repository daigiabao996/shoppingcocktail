import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function AuthRoute({ component: Component, ...rest }) {
    const checkToken = () => {
        return JSON.parse(localStorage.getItem("isLogin"));
    };
    return (
        <Route
            {...rest}
            render={(props) => {
                return checkToken() === null ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                );
            }}
        />
    );
}
export default AuthRoute;