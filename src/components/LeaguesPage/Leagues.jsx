import React from 'react';
import classes from "./Leagues.module.css"
import UefaChampionsLeague from './UefaChampionsLeague/UefaChampionsLeague';
import EuropeanChampionship from './EuropeanChampionship/EuropeanChampionship';
import Api from '../Api/Api';


const Leagues = (props) => {
    return (
        <div className={classes.leagues}>
            <div>
                <Api setApi={props.setApi} />
            </div>
            <div className={classes.leaguesTitle}>
                Leagues List
            </div>
            <div className={classes.leaguesWrapper}>
                <div className={classes.leaguesItem}>
                    <UefaChampionsLeague />
                </div>
                <div className={classes.leaguesItem}>
                    <EuropeanChampionship />
                </div>
            </div>
        </div>
    );
}

export default Leagues;