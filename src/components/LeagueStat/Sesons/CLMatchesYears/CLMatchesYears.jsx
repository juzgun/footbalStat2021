import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CLMatchesYears.module.css';
import DatePicker from 'react-datepicker';
import ChooseDateRange from '../ChooseDateRange/ChooseDateRange';



export default class CLMatchesYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            apiKey: props.apiKey
        };
        // this.changeTeamsCl = (event) => {
        //     this.props.changeTeamsCl(event.target.dataset.season);
        // };
        this.changeTeamsCl = (event) => {
            this.props.changeTeamsCl(event.target.dataset.season);
        };
        this.changeDates = this.props.changeDates;
    }

    async componentDidMount() {
        await fetch("https://api.football-data.org/v2/competitions/CL", {
            headers: { 'x-Auth-Token': this.state.apiKey }
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

    changeTeamsCl = (event) => {
        this.props.changeTeamsCl(event.target.dataset.season);
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
                                    <NavLink to={`/leagueMatches/CL/${item.startDate.slice(0, 4)}`}>
                                        <button key={item.endDate} data-season={item.startDate.slice(0, 4)} onClick={this.changeTeamsCl}>
                                            {item.startDate.slice(0, 4)} - {item.endDate.slice(0, 4)}
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