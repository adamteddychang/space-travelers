import { NavLink } from 'react-router-dom';
import planet from '../planet.png';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <img className="logo" src={planet} alt="logo" />
        <h1 className="header-name">Space Travelers&apos Hub</h1>
      </div>
      <div className="right-nav">
        <NavLink to="/" activeClassName="actived-navlink" exact>Rockets</NavLink>
        <NavLink to="/missions" activeClassName="actived-navlink">Missions</NavLink>
        <NavLink to="/myprofile" activeClassName="actived-navlink">My Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
