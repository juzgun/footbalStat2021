import React, { useEffect, useState } from 'react';
import classes from "./CLStat.module.css"
import Seasons from '../Sesons/Seasons';


function CLStat(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [matches, setMatches] = useState([]);
    let [season, setSeason] = useState(props.season);
    let [count, setCount] = useState('');
    let [dateRange, setDateRange] = useState(props.filterDates);
    let [dateFrom, dateTo] = dateRange;
    const apiKey = props.apiKey;

    let changeTeams = (year) => {
        setDateRange(['', '']);
        setSeason(year);
    };

    function formatDate(date) {
        if (date !== null) {
            let dd = date.getDate();
            if (dd < 10) {
                dd = '0' + dd
            };

            let mm = date.getMonth();
            if (mm < 10) {
                ++mm;
                mm = '0' + mm;
            } else {
                ++mm
            };

            let yyyy = date.getFullYear();

            return `${yyyy}-${mm}-${dd}`;
        };


    };

    function changeDates(upload) {
        let Range = [];
        Range = upload;
        let dates = [];

        if (Range[0] !== null) {
            let a = formatDate(Range[0]);
            dates[0] = a;
        };

        if (Range[1] !== null) {
            let b = formatDate(Range[1]);
            dates[1] = b;
        };
        if (dates[1]) {
            setDateRange(dates);
        }


    };


    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL/matches?season=${season}&dateFrom=${dateFrom}&dateTo=${dateTo}`, {
            headers: { 'x-Auth-Token': apiKey }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMatches(result.matches);
                    setCount(result.count);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [season, isLoaded, dateTo, dateFrom, apiKey]);
    if (error) {
        return <p>` Error {error.message} try reload page later `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else if (matches) {
        return (
            <div className={classes.stat}>
                <div className={classes.navbar}>
                    <Seasons
                        changeTeamsCl={changeTeams}
                        changeDates={changeDates}
                        apiKey={props.apiKey} />
                </div>
                <div className={classes.count}>{count} matches in selection</div>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>MD</th>
                            <th></th>
                            <th>Fixture</th>
                            <th className={classes.odds}>Odds(1/x/2)</th><th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map(item => (
                            <tr className="open_match_view" key={item.id}>
                                <td className="datetime">
                                    <span className="match_date ls-only">{item.utcDate.slice(0, 10).split('-').join(' ')}</span>
                                    &nbsp;
                                    &nbsp;
                                    <span className={classes.badge}>{item.status}</span>
                                </td>
                                <td className="matchday">
                                    {item.matchday}
                                </td>
                                <td data-toggle="tooltip" data-placement="top" title="">
                                    {/* <img className="flag_matchview" src={null} /> */}
                                </td>
                                <td className="fixture">
                                    <span className="homeTeam">
                                        {/* <img className="flag_matchview" src=""></img> */}
                                        <span className="ls-only">{item.homeTeam.name}</span>
                                    </span>
                                    <span className="awayTeam">
                                        <span className="ls-only">&nbsp;vs.</span>
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
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div id="match_table" className="match_table">
                <div className={classes.navbar}>
                    <Seasons
                        changeTeamsCl={changeTeams}
                        changeDates={changeDates}
                        apiKey={props.apiKey} />
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
                        <tb>Sorry there is no data</tb>
                        <tb></tb>
                        <tb></tb>
                        <tb></tb>
                        <tb></tb>
                    </tbody>
                </table>
            </div>
        )
    };
};


export default CLStat;
