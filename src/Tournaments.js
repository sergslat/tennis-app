import './App.css';
import {useState,useEffect} from 'react';

function Tournaments() {
    //JS
    const [data,setData] = useState([]);
    
    const URL = 'https://tennis-live-data.p.rapidapi.com/tournaments/ATP/2019';
    const config = {
        "method": "GET",
	    "headers": {
            "x-rapidapi-host": "tennis-live-data.p.rapidapi.com",
    		"x-rapidapi-key": "509846e2b8mshc66da57461c96cdp1e460fjsn07af5f1f03fd"
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
    // const data1 = data.filter(t=>t.surface === 'Outdoor Grass');
    return (
    <div className='container'>
      <div className="container">
        <div className="row row-cols-3">
        {
            
          data.map(tournament =>(
              
            
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
