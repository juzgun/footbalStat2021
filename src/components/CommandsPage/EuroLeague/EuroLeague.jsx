import React from 'react';
import classes from "./EuroLeague.module.css"
import EuroCommands from './EuroCommands/EuroCommands';
import Seasons from './../../LeagueStat/Sesons/Seasons';


const EuroLeague = (props) => {
    return (
        <div className={classes.euroLeague}>
            <div className={classes.euroLeagueTitle}>
                Список Команд
            </div>
            <Seasons
                changeTeamsEc={props.changeTeamsEc} />
            <div className={classes.euroLeagueItem}>
                European Chanpionship
                <div>
                    <EuroCommands season={props.season} showTeamMatches={props.showTeamMatches} />
                </div>
            </div>
        </div>
    );
}

export default EuroLeague;