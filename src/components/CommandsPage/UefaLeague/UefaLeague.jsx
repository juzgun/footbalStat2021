import React from 'react';
import classes from "./UefaLeague.module.css"
import CLCommands from './CLCommands/CLCommands';
import Seasons from '../../LeagueStat/Sesons/Seasons';


const UefaLeague = (props) => {
    return (
        <div className={classes.uefaLeague}>
            <div className={classes.uefaLeagueTitle}>
                Список Команд
            </div>
            <Seasons season={props.season}
                changeTeamsCl={props.changeTeamsCl} />
            <div className={classes.uefaLeagueItem}>
                Uefa Champions League
                <div>
                    <CLCommands season={props.season} showTeamMatches={props.showTeamMatches} />
                </div>
            </div>
        </div>
    );
}

export default UefaLeague;