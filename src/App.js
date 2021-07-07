import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthRoute from './components/Router/AuthRoute';
import PrivateRoute from './components/Router/PrivateRoute';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/products/:productID" component={ProductDetail} />
                <AuthRoute exact component={Login} path="/login" />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}
export default App;