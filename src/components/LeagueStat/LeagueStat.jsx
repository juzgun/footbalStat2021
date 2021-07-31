import React from 'react';
import classes from "./LeagueStat.module.css"
import { Route, Switch } from 'react-router-dom';
import CLStat from './CLStat/CLStat';
import ECStat from './ECStat/ECStat';


const LeagueStat = (props) => {
    return (
        <div id="match_table" className={classes}>
            <Switch>
                <Route strict path="/leagueMatches/CL" render={() => <CLStat
                    changeTeamsCl={props.changeTeamsCl}
                    season={props.season}
                    filterDates={props.filterDates} />} />
                <Route path="/leagueMatches/EC" render={() => <ECStat
                    changeTeamsEc={props.changeTeamsEc}
                    season={props.season}
                    filterDates={props.filterDates} />} />
            </Switch>
        </div>
    );
}

export default LeagueStat;