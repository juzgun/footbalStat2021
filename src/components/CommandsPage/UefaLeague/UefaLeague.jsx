import React from 'react';
import classes from "./UefaLeague.module.css"
import { CLCommands } from './../../../redux/state';
import Seasons from '../../LeagueStat/Sesons/Seasons';


const UefaLeague = (props) => {
    return (
        <div className={classes.uefaLeague}>
            <div className={classes.uefaLeagueTitle}>
                Список Команд
            </div>
            <Seasons />
            <div className={classes.uefaLeagueItem}>
                Uefa Champions League
                <div>
                    <CLCommands season="2020"/>
                </div>
            </div>
        </div>
    );
}

export default UefaLeague;