import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CLMatchesYears.module.css';



export default class CLMatchesYears extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.changeTeamsCl = (event) => {
            debugger;
            this.props.changeTeamsCl(event.target.dataset.season);
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
                                    <button key={item.endDate} data-season={item.startDate.slice(0, 4)} onClick={this.changeTeamsCl}>
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