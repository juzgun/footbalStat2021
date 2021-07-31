import React from 'react';
import classes from "./UefaChampionsLeague.module.css"
import { NavLink } from 'react-router-dom';
import CLlogo from '../../../assets/CLlogo.jpg'


const UefaChampionsLeague = (props) => {
    return (
        <div className={classes.uefaChampionsLeague}>
            <div className={classes.uefaChampionsLeagueTitle}>
                Uefa Champions League
            </div>
            <img src={CLlogo} alt='cl_logo'></img>

            <NavLink to="/commands/chamionleague" activeClassName={classes.activeLink}>
                <div className={classes.uefaChampionsLeagueLink}>
                    Список Команд
                </div>
            </NavLink>
            <NavLink to="/leagueMatches/CL" activeClassName={classes.activeLink}>
                <div className={`${classes.uefaChampionsLeagueLink} ${classes.uefaChampionsLeagueStat}`}>
                    Календарь лиги
                </div>
            </NavLink>
        </div>
    );
}

export default UefaChampionsLeague;