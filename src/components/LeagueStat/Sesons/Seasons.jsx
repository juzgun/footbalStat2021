import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ECYears from './ECYears/ECYears';
import CLYears from './CLYears/CLYears';
import classes from "./Seasons.module.css"
import CLMatchesYears from './CLMatchesYears/CLMatchesYears';
import ECMatchesYears from './ECMatchesYears/ECMatchesYears';

const Seasons = (props) => {
    return (
        <div className={classes.seasons}>
            <div className={classes.seasonsItem}>
                <div className={classes.seasonsTitle}>
                    Seasons
                </div>
                <Switch>
                    <Route path="/leagueMatches/CL" render={() => <CLMatchesYears
                        changeTeamsCl={props.changeTeamsCl}
                        changeDates={props.changeDates}
                        apiKey={props.apiKey} />} />
                    <Route path="/leagueMatches/EC" render={() => <ECMatchesYears
                        changeTeamsEc={props.changeTeamsEc}
                        changeDates={props.changeDates} 
                        apiKey={props.apiKey} />} />
                    <Route path="/commands/chamionleague/" render={() => <CLYears
                        showCommands={props.showCommands} 
                        apiKey={props.apiKey} />} />
                    <Route path="/commands/eurochampionats/" render={() => <ECYears
                        showCommands={props.showCommands} 
                        apiKey={props.apiKey} />} />
                </Switch>

            </div>
        </div>
    );
}

export default Seasons;