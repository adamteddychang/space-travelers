import { Link } from 'react-router-dom';
import planet from '../planet.png';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left-nav">
        <img className="logo" src={planet} alt="logo" />
        <h1 className="header-name">Space Travelers&apos Hub</h1>
      </div>
      <div className="right-nav">
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/myprofile">My Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;