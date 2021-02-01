import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/app.scss'

//Components
import Navbar from './components/Navbar'
import FilterSearch from './components/FilterSearch'

//Pages
import Homepage from './pages/Homepage';
import Infopage from './pages/Infopage';
import Moviespage from './pages/Moviespage';
import Tvshowspage from './pages/Tvshowspage';

function App() {
  return (
    <Router>
      <Navbar />
      <FilterSearch />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage}/>  
          <Route exact path="/info/:id" component={Infopage}/>  
          <Route exact path="/movies" component={Moviespage}/>  
          <Route exact path="/tvshows" component={Tvshowspage}/>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
