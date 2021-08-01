import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CommandDates from './components/CommandDates/CommandDates';
import EuroLeague from './components/CommandsPage/EuroLeague/EuroLeague';
import UefaLeague from './components/CommandsPage/UefaLeague/UefaLeague';
import Header from './components/Header/Header';
import Leagues from './components/LeaguesPage/Leagues';
import LeagueStat from './components/LeagueStat/LeagueStat';



const App = (props) => {
  return (
    <div className='flex appWrapper'>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Leagues setApi={props.setApi} />} />
        <Route path="/commands/eurochampionats" render={() => <EuroLeague
          season={props.state.season}
          showTeamMatches={props.showTeamMatches}
          changeTeamsEc={props.changeTeamsEc}
          apiKey={props.state.apiToken}
        />} />
        <Route path="/commands/chamionleague" render={() => <UefaLeague
          season={props.state.season}
          showTeamMatches={props.showTeamMatches}
          changeTeamsCl={props.changeTeamsCl} 
          apiKey={props.state.apiToken} />} />
        <Route path="/commandDates" render={() => <CommandDates
          teamId={props.state.teamId}
          season={props.state.season} 
          apiKey={props.state.apiToken}
        />} />
        <Route path="/leagueMatches/CL" render={() => <LeagueStat
          changeTeamsCl={props.changeTeamsCl}
          season={props.state.season}
          filterDates={props.state.filterDates} 
          apiKey={props.state.apiToken} />} />
        <Route path="/leagueMatches/EC" render={() => <LeagueStat
          changeTeamsEc={props.changeTeamsEc}
          season={props.state.season}
          filterDates={props.state.filterDates} 
          apiKey={props.state.apiToken} />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
