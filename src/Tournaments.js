import './App.css';
import {useState,useEffect} from 'react';
import CountryFilter from './countryFilter';

function Tournaments() {
    //JS
    const [data,setData] = useState([]);
    const [countryStatus, setCountryStatus] = useState('all');
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    
    const URL = 'https://tennis-live-data.p.rapidapi.com/tournaments/ATP/2022';
    const config = {
        "method": "GET",
	    "headers": {
            "x-rapidapi-host": "tennis-live-data.p.rapidapi.com",
    		"x-rapidapi-key": process.env.REACT_APP_KEY
        }
    };
    const getData = async () =>{
        const res = await fetch(URL,config);
        const data = await res.json();
        setData(data.results);
    }

    useEffect(() =>{
        getData();
    },[]);
    const filterHandler = () => {
      switch (countryStatus){
          case 'all':
            setFilteredTournaments (data);
              break;
          case 'bolivia':
              setFilteredTournaments(data.filter(tournament => tournament.country === 'Bolivia'));
              break;
          case 'USA':
              setFilteredTournaments(data.filter(tournament => tournament.country === 'USA'));
              break;
          case 'argentina':
              setFilteredTournaments(data.filter(tournament => tournament.country === 'Argentina'));
              break;  
          case 'australia':
              setFilteredTournaments(data.filter(tournament => tournament.country === 'Australia'));
              break;  
          default:
              setFilteredTournaments (data);
              break;
      }
  }
  useEffect(filterHandler,[data,countryStatus]);
    // const data1 = data.filter(t=>t.surface === 'Outdoor Grass');
    return (
    <div className='container'>
      <CountryFilter countryStatus = {countryStatus} setCountryStatus = {setCountryStatus}/>
      <div className="container">
        <div className="row row-cols-3">
        {
            
          filteredTournaments.map(tournament =>(
              
            
            <div key={tournament.id} className='col'> 
              <div className="card text-white bg-secondary mb-3" style={{'maxWidth': '18rem'}}>
                <div className="card-header">{tournament.city} - {tournament.country}</div>
                <div className="card-body">
                  <h5 className="card-title">{tournament.name}</h5>
                  <p className="card-text">From {tournament.start_date} to {tournament.end_date}</p>
                  <p className="card-text">Surface: {tournament.surface}</p>
                </div>
                  
              </div>
            </div> 
                
                 
            ))}
        </div>
      </div>    
    </div>
    );
}

export default Tournaments;
