import React, { useState, useEffect } from 'react';
import classes from "./UefaLeague.module.css"
import CLCommands from './CLCommands/CLCommands';
import Seasons from '../../LeagueStat/Sesons/Seasons';


let UefaLeague = (props) => {

    let [season, setSeason] = useState(props.season);
    let apiKey = props.apiKey;

    useEffect(() => {

        let showCommands = (event) => {
            props.season = event;
        };

        return (
            <div className={classes.uefaLeague}>
                <div className={classes.uefaLeagueTitle}>
                    Список Команд
                </div>
                <Seasons
                    showCommands={showCommands}
                    apiKey={apiKey} />
                <div className={classes.uefaLeagueItem}>
                    Uefa Champions League
                    <div>
                        <CLCommands
                            season={season}
                            showTeamMatches={props.showTeamMatches}
                            apiKey={apiKey} />
                    </div>
                </div>
            </div>
        );
    }, [props.showTeamMatches, season, apiKey, props]);




    return (
        <div className={classes.uefaLeague}>
            <div className={classes.uefaLeagueTitle}>
                Commands List
            </div>
            <Seasons
                showCommands={setSeason}
                apiKey={apiKey} />
            <div className={classes.uefaLeagueItem}>
                Uefa Champions League
                <div>
                    <CLCommands
                        season={season}
                        showTeamMatches={props.showTeamMatches}
                        apiKey={apiKey} />
                </div>
            </div>
        </div>
    );
}

export default UefaLeague;