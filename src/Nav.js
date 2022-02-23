import './App.css';
import mainLogo from './sfdclogo.png';
import {Link} from 'react-router-dom';



function Nav() {
  const Navstyle = {
      color: 'white'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={mainLogo} alt="" className='logo'/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <Link className="nav-link" style={Navstyle} to = '/tournaments'>
                <li className="nav-item" >Tournaments</li>
              </Link>
              <Link className="nav-link" style={Navstyle} to = '/players'>
                <li className="nav-item">Players</li>
              </Link>
              <Link className="nav-link" style={Navstyle} to = '/'>
                <li className="nav-item">Home</li>
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
