import React, { Component } from 'react';
import './state.css';
import { NavLink } from 'react-router-dom';
import classes from './state.css'
import { TeamMatshesData } from './TeamMatchesData/TeamMatchesData';

let changeTeamsEc = (data) => {
    return <EuroCommands season={data} />
}

let changeTeamsCl = (data) => {
    return <CLCommands season={data} />
}

export let showTeamMatchesEc = (data) => {
    return <TeamMatshesData teamid={data} />
}

export let showTeamMatchesCl = (data) => {
    return <TeamMatshesData teamid={data} />
}

export class CLCommands extends Component {
    constructor(props) {
        super(props);
        this.teamLink = React.createRef();
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
    }

    async componentDidMount() {
        await fetch(`https://api.football-data.org/v2/competitions/CL/teams?seasons=${this.state.season}`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.teams
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {
                        items.map(item => (
                            <li key={item.name}>
                                {item.name}
                                {console.log(item.id)}
                                <NavLink to={`/commandDates/${item.id}`} data={item.id} season={item.name}>
                                    <button
                                        data={item.id}
                                        ref={this.teamLink}
                                        onClick={showTeamMatchesCl(item.id)}>
                                        Матчи
                                    </button>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul >
            )
        }
    }
}

export class EuroCommands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
    }

    async componentDidMount() {
        await fetch(`https://api.football-data.org/v2/competitions/EC/teams?seasons=${this.state.season}`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.teams
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name}
                            <NavLink to={`/commandDates/${item.id}`} data={item.id}>
                                <button
                                    data={item.id}
                                    ref={this.teamLink}
                                    onClick={showTeamMatchesEc(item.id)}>
                                    Матчи
                                </button>
                            </NavLink>
                        </li>
                    ))
                    }
                </ul >
            )
        }
    }
}


export class ECYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
    }


    async componentDidMount() {
        await fetch('https://api.football-data.org/v2/competitions/EC', {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.seasons
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.startDate}>
                            <NavLink to={`/commands/eurochampionats/${item.startDate.slice(0, 4)}`}>
                                <button data={item.startDate.slice(0, 4)} onClick={changeTeamsEc(item.startDate.slice(0, 4))}>
                                    {item.startDate.slice(0, 4)}
                                </button>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export class CLYears extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        await fetch("https://api.football-data.org/v2/competitions/CL", {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.seasons
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <div>
                            <li key={item.startDate}>
                                <NavLink to={`/commands/chamionleague/${item.startDate.slice(0, 4)}`}>
                                    <button key={item.endDate} data={item.startDate.slice(0, 4)} onClick={changeTeamsCl(item.startDate.slice(0, 4))}>
                                        {item.startDate.slice(0, 4)} - {item.endDate.slice(0, 4)}
                                    </button>
                                </NavLink>
                            </li></div>

                    ))}
                </ul>
            )
        }
    }
}



export class ECMatchesYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
    }


    async componentDidMount() {
        await fetch('https://api.football-data.org/v2/competitions/EC', {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.seasons
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.startDate}>
                            <NavLink to={`/leagueMatches/EC/${item.startDate.slice(0, 4)}`}>
                                <button data={item.startDate.slice(0, 4)} onClick={changeTeamsEc(item.startDate.slice(0, 4))}>
                                    {item.startDate.slice(0, 4)}
                                </button>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export class CLMatchesYears extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        await fetch("https://api.football-data.org/v2/competitions/CL", {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.seasons
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <div>
                            <li key={item.startDate}>
                                <NavLink to={`/leagueMatches/CL/${item.startDate.slice(0, 4)}`}>
                                    <button key={item.endDate} data={item.startDate.slice(0, 4)} onClick={changeTeamsCl(item.startDate.slice(0, 4))}>
                                        {item.startDate.slice(0, 4)} - {item.endDate.slice(0, 4)}
                                    </button>
                                </NavLink>
                            </li></div>

                    ))}
                </ul>
            )
        }
    }
}
