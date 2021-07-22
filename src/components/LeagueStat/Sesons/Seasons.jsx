import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CLYears, ECYears } from '../../../redux/state';
import classes from "./Seasons.module.css"

const Seasons = (props) => {
    return (
        <div className={classes.seasons}>
            <div className={classes.seasonsItem}>
                <div className={classes.seasonsTitle}>
                    Seasons
                </div>
                <Switch>
                    <Route exact path="/leagueMatches/CL" render={() => <CLYears />} />
                    <Route path="/leagueMatches/EC" render={() => <ECYears />} />
                </Switch>

            </div>
        </div>
    );
}

export default Seasons;