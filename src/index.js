import store from './redux/state';
import classes from './styles.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <HashRouter>
            <App
                state={store.getState()}
                showTeamMatches={store.showTeamMatches.bind(store)}
                changeTeamsEc={store.changeTeamsEc.bind(store)}
                changeTeamsCl={store.changeTeamsCl.bind(store)}
                setApi={store.setApi.bind(store)} />
        </HashRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();