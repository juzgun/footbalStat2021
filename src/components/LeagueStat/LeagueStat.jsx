import React from 'react';
import classes from "./LeagueStat.module.css"
import Seasons from './Sesons/Seasons';
import { Route, Switch } from 'react-router-dom';
import CLStat from './CLStat/CLStat';
import ECStat from './ECStat/ECStat';


const LeagueStat = (props) => {
    return (
        <div id="match_table" className={classes}>
            <Switch>
                <Route exact path="/leagueMatches/CL" render={() => <CLStat />} />
                <Route path="/leagueMatches/EC" render={() => <ECStat />} />
            </Switch>
        </div>
    );
}

export default LeagueStat;