import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { showTeamMatches, changeTeamsEc, changeTeamsCl } from './redux/state'


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          showTeamMatches={showTeamMatches}
          changeTeamsEc={changeTeamsEc}
          changeTeamsCl={changeTeamsCl} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default rerenderEntireTree;
