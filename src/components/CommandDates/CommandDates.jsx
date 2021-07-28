import React from 'react';
import TeamMatshesData from './TeamMatchesData/TeamMatchesData';
import classes from "./CommandDates.module.css"



const CommandDates = (props) => {
    return (
        <div className={classes.commandDates}>
            Календарь Команды
            <div className={classes.commandDatesItem}>
                <TeamMatshesData
                    teamid={props.teamId} />
            </div>
        </div>
    );
}

export default CommandDates;