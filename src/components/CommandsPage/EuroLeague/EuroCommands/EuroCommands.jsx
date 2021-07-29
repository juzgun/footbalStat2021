import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class EuroCommands extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
        this.showTeamMatches = (event) => {
            props.showTeamMatches(event.target.dataset.id);
        };

    }





    async componentDidMount() {
        await fetch(`https://api.football-data.org/v2/competitions/EC/teams?season=${this.state.season}`, {
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
                            <li key={item.id}>
                                {item.name}
                                {console.log(this.state.season)}
                                <NavLink to={`/commandDates/${item.id}`} data={item.id}>
                                    <button
                                        data-id={item.id}
                                        ref={this.teamLink}
                                        onClick={this.showTeamMatches}>
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