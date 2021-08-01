import React from 'react';
import TeamMatshesData from './TeamMatchesData/TeamMatchesData';
import classes from "./CommandDates.module.css"



const CommandDates = (props) => {
    return (
        <div className={classes.commandDates}>
            <div>
                Календарь Команды
            </div>
            <div className={classes.commandDatesItem}>
                <TeamMatshesData
                    teamid={props.teamId}
                    season={props.season}
                    apiKey={props.apiKey} />
            </div>
        </div>
    );
}

export default CommandDates;