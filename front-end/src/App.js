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
              <Route path="/movies" component={Moviespage} />
              <Route path="/tvshows" component={Tvshowspage} />
              <Route path="/info/:data_type/:id" component={Infopage} />
              <Route path="/watch-list" component={WatchList} />
              <Route path="/favorite-list" component={FavoriteList} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
