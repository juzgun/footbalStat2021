import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CommandDates from './components/CommandDates/CommandDates';
import EuroLeague from './components/CommandsPage/EuroLeague/EuroLeague';
import UefaLeague from './components/CommandsPage/UefaLeague/UefaLeague';
import Header from './components/Header/Header';
import LeagueDates from './components/LeagueDates/LeagueDates';
import Leagues from './components/LeaguesPage/Leagues';
import LeagueStat from './components/LeagueStat/LeagueStat';



const App = (props) => {
  return (
    <div className='flex appWrapper'>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Leagues />} />
        <Route path="/commands/eurochampionats" render={() => <EuroLeague />} />
        <Route path="/commands/chamionleague" render={() => <UefaLeague />} />
        <Route path="/commandDates" render={() => <CommandDates />} />
        <Route path="/leagueDates" render={() => <LeagueDates />} />
        <Route path="/leagueMatches/CL" render={() => <LeagueStat />} />
        <Route path="/leagueMatches/EC" render={() => <LeagueStat />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
