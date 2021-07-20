import React from 'react';
import classes from "./UefaChampionsLeague.module.css"


const UefaChampionsLeague = (props) => {
    return (
        <div className={classes.uefaChampionsLeague}>
            Uefa Champions League
            <div className={classes.uefaChampionsLeagueItem}></div>
        </div>
    );
}

export default UefaChampionsLeague;