import React from 'react';
import classes from "./CommandDates.module.css"


const CommandDates = (props) => {
    return (
        <div className={classes.commandDates}>
            Календарь Команды
            <div className={classes.commandDatesItem}></div>
        </div>
    );
}

export default CommandDates;