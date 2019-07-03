import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Counter from '../components/counter/counter';
import Game from '../components/game/game';

const BasicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/count' component={Counter} />
            <Route exact path='/' component={Game} />
        </Switch>
    </HashRouter>
);
export default BasicRouter;