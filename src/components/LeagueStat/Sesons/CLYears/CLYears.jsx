import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CLYears.module.css';


export default class CLYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.changeTeamsCl = (event) => {
            props.changeTeamsCl(event.target.dataset.season);
        };
    }

    async componentDidMount() {
        await fetch('https://api.football-data.org/v2/competitions/CL', {
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
                            <NavLink to={`/commands/chamionleague/${item.startDate.slice(0, 4)}`}>
                                <button data-season={Number(item.startDate.slice(0, 4))} onClick={this.changeTeamsCl}>
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