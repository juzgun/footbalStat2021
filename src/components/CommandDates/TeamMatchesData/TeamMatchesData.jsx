import React, { useEffect, useState } from 'react';
import ChooseDateRange from '../../LeagueStat/Sesons/ChooseDateRange/ChooseDateRange';
import './TeamMatchesData.module.css';

function TeamMatshesData(props) {

    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
    let [season, setSeason] = useState(props.season);
    let [teamid] = useState(props.teamid);
    let [dateRange, setDateRange] = useState(['-01-01', '-12-31']);
    let [dateFrom, dateTo] = dateRange;
    const apiKey = props.apiKey;


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

            return `-${mm}-${dd}`;
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
        fetch(`https://api.football-data.org/v2/teams/${teamid}/matches?dateFrom=${season}${dateFrom !== '-12-31' ? dateFrom : '-12-31'}&dateTo=${season}${dateTo !== '-12-31' ? dateTo : '-12-31'}`, {
            headers: { 'x-Auth-Token': apiKey }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setError(result.message);
                    setItems(result.matches);
                    if (teamid) {
                        setSeason(result.filters.dateFrom.slice(0, 4));
                    }

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [season, isLoaded, teamid, dateTo, apiKey, dateFrom]);

    if (error) {
        return <p>` Error, please choose dates in ${season} season. `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else {
        return (
            <duv>
                <div>
                    <div>
                        Filter
                    </div>
                    <ChooseDateRange changeDates={changeDates} />
                </div>
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <div key={item.awayTeam.name}>
                                    Date of match is {item.utcDate.slice(0, 10)} between {item.homeTeam.name} and {item.awayTeam.name}. Score:  ( {item.score.fullTime.homeTeam} : {item.score.fullTime.awayTeam} )
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </duv>
        )
    }
};

export default TeamMatshesData;

