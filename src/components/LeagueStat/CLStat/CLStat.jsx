import React, { Component } from 'react';
import classes from "./CLStat.module.css"
import Seasons from '../Sesons/Seasons';
import { changeTeamsEc } from './../../../redux/state';

export default class CLStat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            matches: [],
            season: props.season,
            count: ''
        };

    }

    async componentDidMount() {
        debugger;
        await fetch(`https://api.football-data.org/v2/competitions/CL/matches?season=${this.state.season}`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        matches: result.matches,
                        count: result.count
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
        const { error, isLoaded, matches, count } = this.state;

        if (error) {
            return <p>` Error {error.message} try reload page later `</p>
        } else if (!isLoaded) {
            return <p>` Loading... `</p>
        } else {
            debugger;
            return (
                <div id="match_table" className="match_table">
                    <div className={classes.navbar}>
                        <Seasons changeTeamsCl={this.props.changeTeamsCl} />
                    </div>
                    <div className={classes.count}>{count} matches in selection</div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>MD</th>
                                <th></th>
                                <th>Fixture</th>
                                <th className="xls-only">Odds (1/x/2)</th><th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                matches.map(item => (
                                    <tr id="6123" className="open_match_view">
                                        <td className="datetime">
                                            <span className="badge badge-pill badge-primary">{item.status}</span>
                                            <span className="match_date ls-only">{item.utcDate}</span>
                                        </td>
                                        <td className="matchday">
                                            {item.matchday}
                                        </td>
                                        <td data-toggle="tooltip" data-placement="top" title="UEFA Champions League">
                                            <img className="flag_matchview" src="" />
                                            &nbsp;
                                        </td>
                                        <td className="fixture">
                                            <span className="homeTeam">
                                                <img className="flag_matchview" src=""></img><span className="ls-only">&nbsp;{item.homeTeam.name}</span>
                                            </span>
                                            <span className="awayTeam">
                                                <span className="ls-only"> vs. </span>
                                                <span className="sm-only">-</span>
                                                <img className="flag_matchview" src=""></img><span className="ls-only">&nbsp;{item.awayTeam.name}</span>
                                            </span>
                                        </td>
                                        <td className="odds xls-only">
                                            {item.odds.homeWin} / {item.odds.draw} / {item.odds.awayWin}
                                        </td>
                                        <td className="score">
                                            {item.score.fullTime.homeTeam}:{item.score.fullTime.awayTeam}
                                        </td>
                                    </tr>))};
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}



