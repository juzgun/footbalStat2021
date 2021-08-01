import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CLYears.module.css';



function CLYears(props) {
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
    let [season, setSeason] = useState(props.season);
    const apiKey = props.apiKey;

    let showCommands = (event) => {
        props.showCommands(event.target.dataset.season);
    };

    useEffect(() => {
        fetch(`https://api.football-data.org/v2/competitions/CL`, {
            headers: { 'x-Auth-Token': apiKey }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.seasons);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [season, isLoaded]);
    if (error) {
        return <p>` Error {error.message} try reload page later `</p>
    } else if (!isLoaded) {
        return <p>` Loading... `</p>
    } else if (items) {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <NavLink to={`/commands/chamionleague/${item.startDate.slice(0, 4)}`}>
                            <button data-season={Number(item.startDate.slice(0, 4))} onClick={showCommands}>
                                {item.startDate.slice(0, 4)}
                            </button>
                        </NavLink>
                    </li>
                ))}
            </ul>)
    } else {
        return (
            <p>Sorry there is no data, please try later.</p>
        )
    };
};


export default CLYears;



