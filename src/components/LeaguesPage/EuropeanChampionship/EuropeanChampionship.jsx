import React from 'react';
import classes from "./EuropeanChampionship.module.css"
import { NavLink } from 'react-router-dom';
import EClogo from '../../../assets/EClogo.png'


const EuropeanChampionship = (props) => {
    return (
        <div className={classes.europeanChampionship}>
            <div className={classes.europeanChampionshipTitle}>
                European Championship
            </div>
            <img src={EClogo} alt='cl_logo'></img>

            <NavLink to="/commands/eurochampionats" activeClassName={classes.activeLink}>
                <div className={classes.europeanChampionshipLink}>
                    Commands List
                </div>
            </NavLink>
            <NavLink to="/leagueMatches/EC" activeClassName={classes.activeLink}>
                <div className={`${classes.europeanChampionshipLink} ${classes.europeanChampionshipStat}`}>
                    Calendar of league
                </div>
            </NavLink>
        </div >
    );
}

export default EuropeanChampionship;