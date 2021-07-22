import React from 'react';
import classes from "./EuroLeague.module.css"
import { EuroCommands } from './../../../redux/state';


const EuroLeague = (props) => {
    return (
        <div className={classes.euroLeague}>
            <div className={classes.euroLeagueTitle}>
                Список Команд
            </div>
            <div className={classes.euroLeagueItem}>
                European Chanpionship
                <div>
                    <EuroCommands />
                </div>
            </div>
        </div>
    );
}

export default EuroLeague;