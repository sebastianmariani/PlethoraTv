import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/app.scss'

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalState';

//Pages
import Homepage from './pages/Homepage';
import Moviespage from './pages/Moviespage';
import Tvshowspage from './pages/Tvshowspage';
import Infopage from './pages/Infopage';
import WatchList from './pages/WatchList';
import FavoriteList from './pages/FavoriteList';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="webpage">
          <Navbar />
          <div className="container main">
            <Switch>
              <Route exact path="/" component={Homepage}/>    
              <Route exact path="/movies" component={Moviespage}/>  
              <Route exact path="/tvshows" component={Tvshowspage}/>
              <Route exact path="/info/:data_type/:id" component={Infopage}/> 
              <Route exact path="/watch-list" component={WatchList}/>
              <Route exact path="/favorite-list" component={FavoriteList}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
