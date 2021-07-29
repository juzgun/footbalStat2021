import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./CLCommands.module.css"



function CLCommands(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
    let [season, setSeason] = useState(props.season);
    let teamLink = React.createRef();

    let showTeamMatches = (event) => {
        props.showTeamMatches(event.target.dataset.id);
    };

    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL/teams?season=${props.season}`, {
            headers: { 'x-Auth-Token': '5dcd489dcd6842c68d4d7808b50209d9' }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.teams);
                },
                (error) => {
                    isLoaded(true);
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



