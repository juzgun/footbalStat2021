import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CommandDates from './components/CommandDates/CommandDates';
import Commands from './components/CommandsPage/Commands';
import Header from './components/Header/Header';
import LeagueDates from './components/LeagueDates/LeagueDates';
import Leagues from './components/LeaguesPage/Leagues';
import Sidebar from './components/Sidebar/Sidebar';



const App = (props) => {
  return (
    <BrowserRouter BrowserRouter >
      <div className='flex appWrapper'>
        <Header />
        <Sidebar />
        <Route path="/commands" render={() => <Commands />} />
        <Route path="/commandDates" render={() => <CommandDates />} />
        <Route path="/leagueDates" render={() => <LeagueDates />} />
        <Route path="/leagues" render={() => <Leagues />} />
      </div>
    </BrowserRouter >
  );
}

export default App;
