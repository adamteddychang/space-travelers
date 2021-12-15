import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Missions from './Components/Missions';
import MyProfile from './Components/MyProfile/MyProfile';
import Rockets from './Components/Rockets';
import './Components/CSS/Mission.css';
import './Components/CSS/Navbar.css';
import './Components/CSS/MyProfile.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route>
          <MyProfile path="/myprofile" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
