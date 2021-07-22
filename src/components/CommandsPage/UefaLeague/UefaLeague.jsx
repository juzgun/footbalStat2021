import React from 'react';
import classes from "./UefaLeague.module.css"
import { CLCommands } from './../../../redux/state';


const UefaLeague = (props) => {
    return (
        <div className={classes.uefaLeague}>
            <div className={classes.uefaLeagueTitle}>
                Список Команд
            </div>
            <div className={classes.uefaLeagueItem}>
                Uefa Champions League
                <div>
                    <CLCommands />
                </div>
            </div>
        </div>
    );
}

export default UefaLeague;