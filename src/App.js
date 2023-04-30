import './App.css';
import background from './background.jpg';
import Nav from './Nav';
import Tournaments from './Tournaments';
import Home from './Home';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Switch is not used in V.6
import Players from './Players';
import PlayerDetail from './PlayerDetail';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <Nav />
        {/* Route should be wrapped inside <Routes>, use element instead of component, use full component name <Tournaments/>  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tournaments' element={<Tournaments />} />
          <Route path='/players' element={<Players />} />
          <Route path='/players/:id' element={<PlayerDetail />} />
          <Route path="*" element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
