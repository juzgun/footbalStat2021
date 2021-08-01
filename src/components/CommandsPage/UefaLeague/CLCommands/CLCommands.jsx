import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./CLCommands.module.css"



function CLCommands(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
    let [season, setSeason] = useState(props.season);
    let teamLink = React.createRef();
    const apiKey = props.apiKey;

    let showTeamMatches = (event) => {
        props.showTeamMatches(event.target.dataset.id, event.target.dataset.season);
    };

    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL/teams?season=${props.season}`, {
            headers: { 'x-Auth-Token': apiKey }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.teams);
                    if (!result.errorCode) {
                        setSeason((result.season.startDate).slice(0, 4));
                    };

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [props.season, isLoaded]);
    if (error) {
        return <p>` Error {error.message} try reload page later `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else if (items) {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <NavLink to={`/commandDates/${item.id}`} data={item.id} season={item.name}>
                            <button
                                data-id={item.id}
                                data-season={season}
                                ref={teamLink}
                                onClick={showTeamMatches}>
                                Матчи
                            </button>
                        </NavLink>
                    </li>
                ))
                }
            </ul >)
    } else {
        return (
            <p>Sorry there is no data, please try later.</p>
        )
    };
};


export default CLCommands;



