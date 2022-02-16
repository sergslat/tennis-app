import './App.css';
import mainLogo from './sfdclogo.png';
import {Link} from 'react-router-dom';



function Nav() {
  const Navstyle = {
      color: 'white'
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <img src={mainLogo} alt="" className='logo'/>
      <ul className='nav-links'>
          <Link style={Navstyle} to = '/tournaments'>
            <li>Tournaments</li>
          </Link>
          <Link style={Navstyle} to = '/players'>
            <li>Players</li>
          </Link>
          <Link style={Navstyle} to = '/'>
            <li>Home</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
