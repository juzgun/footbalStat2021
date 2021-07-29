

let store = {
    _state: {
        teamId: '',
        season: '2019'
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    changeTeamsEc(season) {
        this.getState().season = season;
        this._callSubscriber(this._state);
    },

    changeTeamsCl(season) {
        this.getState().season = season;
        this._callSubscriber(this.getState());
    },

    showTeamMatches(id) {
        this.getState().teamId = id;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;