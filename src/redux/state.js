import './state.css';
import rerenderEntireTree from '../render';


let state = {
    teamId: '',
    season: '2019'
}

window.state = state;

export let changeTeamsEc = (season) => {
    state.season = season;
    rerenderEntireTree(state);
}

export let changeTeamsCl = (season) => {
    state.season = season;
    debugger;
    rerenderEntireTree(state);
}

export let showTeamMatches = (id) => {
    state.teamId = id;
    rerenderEntireTree(state);
}

export default state;