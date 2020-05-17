import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/Home';

class BaseRouter extends React.PureComponent {
    render() {
        return (
            <div>
                <Route path="/" component={HomePage} />
            </div>
        )
    }
}
export default BaseRouter;