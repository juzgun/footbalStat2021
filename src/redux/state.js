

let store = {
    _state: {
        teamId: '',
        season: '2021',
        filterDates: ['', ''],
        apiToken: ''
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    _clearFilter() {
        this.getState().filterDates = ['', ''];
    },
    setApi(key) {
        this.getState().apiToken = key;
    },
    getState() {
        return this._state;
    },
    changeTeamsEc(season) {
        this.getState().season = season;
        // this._clearFilter();
        this._callSubscriber(this.getState());
    },

    changeTeamsCl(season) {
        debugger;
        this.getState().season = season;
        // this._clearFilter();
        this._callSubscriber(this.getState());

    },

    showTeamMatches(id, season) {
        this.getState().teamId = id;
        this.getState().season = season;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;