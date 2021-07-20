import React from 'react';
import classes from "./Leagues.module.css"
import UefaChampionsLeague from './UefaChampionsLeague/UefaChampionsLeague';
import EuropeanChampionship from './EuropeanChampionship/EuropeanChampionship';


const Leagues = (props) => {
    return (
        <div className={classes.leagues}>
            <div className={classes.leaguesTitle}>
                Список Лиг Европы
            </div>
            <div className={classes.leaguesItem}>
                <UefaChampionsLeague />
            </div>
            <div className={classes.leaguesItem}>
                <EuropeanChampionship />
            </div>
        </div>
    );
}

export default Leagues;