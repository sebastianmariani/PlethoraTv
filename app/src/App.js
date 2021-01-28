import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/app.css'

//Components
import Navbar from './components/Navbar'

//Pages
import Homepage from './pages/Homepage';
import Infopage from './pages/Infopage';
import Moviespage from './pages/Moviespage';
import Tvshowspage from './pages/Tvshowspage';

function App() {
  return (
    <Router>
      <Navbar />
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
