import './App.css';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Players() {
    //JS
    const [data,setData] = useState([]);
    
    const URL = 'https://tennis-live-data.p.rapidapi.com/rankings/ATP';
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
        // console.log(data.results.rankings);
        setData(data.results.rankings);
    }

    useEffect(() =>{
        getData();
    },[]);

    // const top10 = data.slice(0,21);
    const top10 = data.filter(player => player.country === 'USA');
    
    return (
    <div className="container">
        <div className="row row-cols-3">
            {
                top10.map(player =>(
                    
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
