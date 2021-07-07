import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'

function PrivateRoute({ component: Component, ...rest }) {
    const checkToken = () => {
        return JSON.parse(localStorage.getItem("isLogin"));
    };
    return (
        <Route
            {...rest}
            render={(props) => {
                return checkToken() ? (
                    <MainLayout >
                        <Component {...props} />
                    </MainLayout>
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                );
            }}
        />
    );
}
export default PrivateRoute;