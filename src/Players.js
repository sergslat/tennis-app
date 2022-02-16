import './App.css';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
//Components
import CountryFilter from './countryFilter';

function Players() {
    //JS
    const [data,setData] = useState([]);
    const [countryStatus, setCountryStatus] = useState('all');
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    
    const URL = 'https://tennis-live-data.p.rapidapi.com/rankings/ATP';
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
        // console.log(data.results.rankings);
        setData(data.results.rankings);
    }

    useEffect(() =>{
        getData();
    },[]);
    
    const filterHandler = () => {
        switch (countryStatus){
            case 'all':
                setFilteredPlayers (data.slice(0,10));
                break;
            case 'bolivia':
                setFilteredPlayers(data.filter(player => player.country === 'Bolivia'));
                break;
            case 'USA':
                setFilteredPlayers(data.filter(player => player.country === 'USA'));
                break;
            case 'argentina':
                setFilteredPlayers(data.filter(player => player.country === 'Argentina'));
                break;  
            case 'australia':
                setFilteredPlayers(data.filter(player => player.country === 'Australia'));
                break;  
            default:
                setFilteredPlayers (data.slice(0,10));
                break;
        }
    }
    //const top10 = data.slice(0,10);
    // const top10 = data.filter(player => player.country === 'USA');
    useEffect(filterHandler,[countryStatus,data]);
    return (
        
    <div className="container">
        <CountryFilter countryStatus = {countryStatus} setCountryStatus = {setCountryStatus}/>
        <div className="row row-cols-3">
            {
                filteredPlayers.map(player =>(
                    
                    <div key={player.id} className='col'>
                        <div className="card text-white bg-dark mb-3" style={{'maxWidth': '18rem'}}>
                            <div className="card-header"># {player.ranking}</div>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/players/${player.id}/`}>{player.full_name}</Link></h5>
                                <p className="card-text">{player.country}</p>
                                
                            </div>
                        </div> 
                    </div>
                    
                ))}
        </div>
    </div>
    );
}

export default Players;
