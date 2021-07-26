import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CLYears, ECYears, CLMatchesYears, ECMatchesYears } from '../../../redux/state';
import classes from "./Seasons.module.css"

const Seasons = (props) => {
    return (
        <div className={classes.seasons}>
            <div className={classes.seasonsItem}>
                <div className={classes.seasonsTitle}>
                    Seasons
                </div>
                <Switch>
                    <Route path="/leagueMatches/CL" render={() => <CLMatchesYears />} />
                    <Route path="/leagueMatches/EC" render={() => <ECMatchesYears />} />
                    <Route path="/commands/chamionleague/" render={() => <CLYears season="2021" />} />
                    <Route path="/commands/eurochampionats/" render={() => <ECYears season="2021" />} />
                </Switch>

            </div>
        </div>
    );
}

export default Seasons;