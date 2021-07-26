import React from 'react';
import { TeamMatshesData } from '../../redux/TeamMatchesData/TeamMatchesData';
import classes from "./CommandDates.module.css"



const CommandDates = (props) => {
    return (
        <div className={classes.commandDates}>
            Календарь Команды
            <div className={classes.commandDatesItem}>
                <TeamMatshesData teamid="610" />
            </div>
        </div>
    );
}

export default CommandDates;