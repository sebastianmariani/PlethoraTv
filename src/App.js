import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/app.scss'

//Components
import Navbar from './components/Navbar'

//Pages
import Homepage from './pages/Homepage';
import Moviespage from './pages/Moviespage';
import Tvshowspage from './pages/Tvshowspage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage}/>    
          <Route exact path="/movies" component={Moviespage}/>  
          <Route exact path="/tvshows" component={Tvshowspage}/>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
