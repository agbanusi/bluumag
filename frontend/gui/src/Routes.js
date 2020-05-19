import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/Home';
import MenuAppBar from './Components/Layout/AppBar';

class BaseRouter extends React.PureComponent {
    render() {
        return (
            <div>
                <Route path="/" component={MenuAppBar} />
                <Route exact path="/" component={HomePage} />
                <Route path="/Components/Pages" component={article} />
            </div>
        )
    }
}
export default BaseRouter;
