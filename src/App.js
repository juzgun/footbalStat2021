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
        <Route exact path="/" render={() => <Leagues />} />
        <Route path="/commands/eurochampionats" render={() => <EuroLeague
          season={props.state.season}
          showTeamMatches={props.showTeamMatches}
          changeTeamsEc={props.changeTeamsEc}
        />} />
        <Route path="/commands/chamionleague" render={() => <UefaLeague
          season={props.state.season}
          showTeamMatches={props.showTeamMatches}
          changeTeamsCl={props.changeTeamsCl} />} />
        <Route path="/commandDates" render={() => <CommandDates teamId={props.state.teamId} />} />
        <Route path="/leagueMatches/CL" render={() => <LeagueStat
          changeTeamsCl={props.changeTeamsCl}
          season={props.state.season}
          filterDates={props.state.filterDates} />} />
        <Route path="/leagueMatches/EC" render={() => <LeagueStat
          changeTeamsEc={props.changeTeamsEc}
          season={props.state.season}
          filterDates={props.state.filterDates} />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
