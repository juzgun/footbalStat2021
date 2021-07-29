import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ECMatchesYears.module.css';


export default class ECMatchesYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            season: props.season
        };
        this.changeTeamsEc = (event) => {
            props.changeTeamsEc(event.target.dataset.season);
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
                        <li key={item.id}>
                            <NavLink to={`/leagueMatches/EC/${item.startDate.slice(0, 4)}`}>
                                <button key={item.endDate} data-season={item.startDate.slice(0, 4)} onClick={this.changeTeamsEc}>
                                    {item.startDate.slice(0, 4)}
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