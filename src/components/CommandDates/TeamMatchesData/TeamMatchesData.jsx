import React, { Component } from 'react';
import './TeamMatchesData.module.css';

export default class TeamMatshesData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            teamid: props.teamid
        };
    }

    async componentDidMount() {
        await fetch(`https://api.football-data.org/v2/teams/${this.state.teamid}/matches`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.matches
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
                        <li key={item.utcDate}>
                            <div key={item.awayTeam.name}>
                                Date of match is {item.utcDate.slice(0, 10)} between {item.homeTeam.name} and {item.awayTeam.name}. Score:  ( {item.score.fullTime.homeTeam} : {item.score.fullTime.awayTeam} )
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}