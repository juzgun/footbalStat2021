import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ChooseDateRange from '../ChooseDateRange/ChooseDateRange';
import classes from './ECMatchesYears.module.css';


export default class ECMatchesYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            apiKey: props.apiKey
        };
        this.changeTeamsEc = (event) => {
            props.changeTeamsEc(event.target.dataset.season);
        };
        this.changeDates = this.props.changeDates;
    }


    async componentDidMount() {
        await fetch('https://api.football-data.org/v2/competitions/EC', {
            headers: { 'x-Auth-Token': this.props.apiKey }
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

    changeTeamsEc = (event) => {
        this.props.changeTeamsEc(event.target.dataset.season);
    };

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>` Error {error.message} `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <div key={item.id}>
                                <li>
                                    <NavLink to={`/leagueMatches/EC/${item.startDate.slice(0, 4)}`}>
                                        <button key={item.endDate} data-season={item.startDate.slice(0, 4)} onClick={this.changeTeamsEc}>
                                            {item.startDate.slice(0, 4)}
                                        </button>
                                    </NavLink>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <div>Filter</div>
                    <ChooseDateRange changeDates={this.changeDates} />
                </div>
            )
        }
    }
}