import React from 'react';
import classes from "./EuroLeague.module.css"
import { EuroCommands } from './../../../redux/state';
import Seasons from './../../LeagueStat/Sesons/Seasons';


const EuroLeague = (props) => {
    return (
        <div className={classes.euroLeague}>
            <div className={classes.euroLeagueTitle}>
                Список Команд
            </div>
            <Seasons />
            <div className={classes.euroLeagueItem}>
                European Chanpionship
                <div>
                    <EuroCommands season="2020" />
                </div>
            </div>
        </div>
    );
}

export default EuroLeague;