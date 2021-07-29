import React, { useState, useEffect } from 'react';
import classes from "./UefaLeague.module.css"
import CLCommands from './CLCommands/CLCommands';
import Seasons from '../../LeagueStat/Sesons/Seasons';


let UefaLeague = (props) => {

    let [season, setSeason] = useState(props.season);

    let showCommands = (event) => {
        debugger;
        props.season = event;
        console.log(props.season);
    };

    useEffect(() => {
        return (
            <div className={classes.uefaLeague}>
                <div className={classes.uefaLeagueTitle}>
                    Список Команд
                </div>
                <Seasons showCommands={showCommands} />
                <div className={classes.uefaLeagueItem}>
                    Uefa Champions League
                    <div>
                        <CLCommands season={season} showTeamMatches={props.showTeamMatches} />
                    </div>
                </div>
            </div>
        );
    }, [props.showTeamMatches, season]);




    return (
        <div className={classes.uefaLeague}>
            <div className={classes.uefaLeagueTitle}>
                Список Команд
            </div>
            <Seasons showCommands={setSeason} />
            <div className={classes.uefaLeagueItem}>
                Uefa Champions League
                <div>
                    <CLCommands season={season} showTeamMatches={props.showTeamMatches} />
                </div>
            </div>
        </div>
    );
}

export default UefaLeague;