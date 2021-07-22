import React from 'react';
import { TeamMatshesData } from '../../redux/state';
import classes from "./CommandDates.module.css"


const CommandDates = (props) => {
    return (
        <div className={classes.commandDates}>
            Календарь Команды
            <div className={classes.commandDatesItem}>
                <TeamMatshesData />
            </div>
        </div>
    );
}

export default CommandDates;