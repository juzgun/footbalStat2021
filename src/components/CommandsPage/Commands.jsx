import React from 'react';
import classes from "./Commands.module.css"
import { CLCommands, EuroCommands } from './../../redux/state';


const Commands = (props) => {
    return (
        <div className={classes.commands}>
            <div className={classes.commandsTitle}>Список Команд</div>
            <div className={classes.commandsItem}>
                UefaChampionsLeague
                <div>
                    <CLCommands />
                </div>
            </div>
            <div className={classes.commandsItem}>
                European Chanpionship
                <div>
                    <EuroCommands />
                </div>
            </div>
        </div>
    );
}

export default Commands;