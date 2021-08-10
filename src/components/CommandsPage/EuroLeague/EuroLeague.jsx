import React, { useState, useEffect } from 'react';
import classes from "./EuroLeague.module.css"
import EuroCommands from './EuroCommands/EuroCommands';
import Seasons from './../../LeagueStat/Sesons/Seasons';


let EuroLeague = (props) => {

    let [season, setSeason] = useState(props.season);
    const apiKey = props.apiKey;

    let showCommands = (event) => {
        props.season = event;
    };

    useEffect(() => {
        return (
            <div className={classes.euroLeague}>
                <div className={classes.euroLeagueTitle}>
                    Commands List
                </div>
                <Seasons
                    showCommands={showCommands}
                    apiKey={apiKey} />
                <div className={classes.euroLeagueItem}>
                    European Chanpionship
                    <div>
                        <EuroCommands
                            season={season}
                            showTeamMatches={props.showTeamMatches}
                            apiKey={apiKey} />
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
                showCommands={setSeason}
                apiKey={apiKey} />
            <div className={classes.euroLeagueItem}>
                European Chanpionship
                <div>
                    <EuroCommands
                        season={season}
                        showTeamMatches={props.showTeamMatches}
                        apiKey={apiKey} />
                </div>
            </div>
        </div>
    );
}

export default EuroLeague;