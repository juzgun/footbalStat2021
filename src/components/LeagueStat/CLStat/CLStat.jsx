import React, { useEffect, useState } from 'react';
import classes from "./CLStat.module.css"
import Seasons from '../Sesons/Seasons';



function CLStat(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [matches, setMatches] = useState([]);
    let [season] = useState(props.season);
    let [count, setCount] = useState('');

    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL/matches?season=${props.season}`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMatches(result.matches);
                    setCount(result.count);
                },
                (error) => {
                    isLoaded(true);
                    setError(error);
                }
            )
    }, [season, isLoaded]);
    if (error) {
        return <p>` Error {error.message} try reload page later `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else {
        return (
            <div id="match_table" className="match_table">
                <div className={classes.navbar}>
                    <Seasons changeTeamsCl={props.changeTeamsCl} />
                </div>
                <div className={classes.count}>{count} matches in selection</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>MD</th>
                            <th></th>
                            <th>Fixture</th>
                            <th className="xls-only">Odds(1/x/2)</th><th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map(item => (
                            <tr id="6123" className="open_match_view" key={item.id}>
                                <td className="datetime">
                                    <span className="match_date ls-only">{item.utcDate}</span>
                                    <span className="badge badge-pill badge-primary">{item.status}</span>
                                </td>
                                <td className="matchday">
                                    {item.matchday}
                                </td>
                                <td data-toggle="tooltip" data-placement="top" title="UEFA Champions League">
                                    {/* <img className="flag_matchview" src={null} /> */}
                                </td>
                                <td className="fixture">
                                    <span className="homeTeam">
                                        {/* <img className="flag_matchview" src=""></img> */}
                                        <span className="ls-only">{item.homeTeam.name}</span>
                                    </span>
                                    <span className="awayTeam">
                                        <span className="ls-only">vs.</span>
                                        <span className="sm-only">-</span>
                                        {/* <img className="flag_matchview" src=""></img> */}
                                        <span className="ls-only">{item.awayTeam.name}</span>
                                    </span>
                                </td>
                                <td className="odds xls-only">
                                    {item.odds.homeWin}/{item.odds.draw}/{item.odds.awayWin}
                                </td>
                                <td className="score">
                                    {item.score.fullTime.homeTeam}:{item.score.fullTime.awayTeam}
                                </td>
                            </tr>))};
                    </tbody>
                </table>
            </div>
        );
    };
};


export default CLStat;
