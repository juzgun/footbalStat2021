import React, { useState, useEffect } from 'react';
import classes from "./EuroLeague.module.css"
import EuroCommands from './EuroCommands/EuroCommands';
import Seasons from './../../LeagueStat/Sesons/Seasons';


let EuroLeague = (props) => {

    let [season, setSeason] = useState(props.season);

    let showCommands = (event) => {
        debugger;
        props.season = event;
    };

    useEffect(() => {
        return (
            <div className={classes.euroLeague}>
                <div className={classes.euroLeagueTitle}>
                    Список Команд
                </div>
                <Seasons
                    showCommands={showCommands} />
                <div className={classes.euroLeagueItem}>
                    European Chanpionship
                    <div>
                        <EuroCommands season={season} showTeamMatches={props.showTeamMatches} />
                    </div>
                </div>
            </div>
        );
    }, [props.showTeamMatches, season]);


    return (
        <div className={classes.euroLeague}>
            <div className={classes.euroLeagueTitle}>
                Список Команд
            </div>
            <Seasons
                showCommands={setSeason} />
            <div className={classes.euroLeagueItem}>
                European Chanpionship
                <div>
                    <EuroCommands season={season} showTeamMatches={props.showTeamMatches} />
                </div>
            </div>
        </div>
    );
}

export default EuroLeague;