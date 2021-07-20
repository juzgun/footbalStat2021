import React from 'react';
import classes from "./LeagueDates.module.css"


const LeagueDates = (props) => {
    return (
        <div className={classes.leagueDates}>
            Календарь Лиги
            <div className={classes.leagueDatesItem}></div>
        </div>
    );
}

export default LeagueDates;