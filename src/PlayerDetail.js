import './App.css';
import {useParams} from 'react-router-dom'; //V.6 {match} prop not supported
import { useEffect,useState } from 'react';

const PlayerDetail = () =>{
    let {id} = useParams();
    // console.log(id);
    const [data,setData] = useState({});

    const URL = `https://tennis-live-data.p.rapidapi.com/player/${id}`;
    const CONFIG = {
        "method": "GET",
	    "headers": {
            "x-rapidapi-host": "tennis-live-data.p.rapidapi.com",
    		"x-rapidapi-key": process.env.REACT_APP_KEY
        }
    };
    const getPlayerData = async () => {
        const res = await fetch (URL,CONFIG);
        const data = await res.json();
        // console.log(data);
        setData(data.results.player)
    }
    useEffect(() =>{
        getPlayerData();
    },[]);
    
    return(
        <div>
            {
                
                <div>
                    <h1>{data.full_name}</h1>
                    <h2>Country: {data.country}</h2>
                    <h2>Ranking: {data.ranking}</h2>
                    <h2>Points: {data.ranking_points}</h2>
                    <h2>Ranking movement: {data.ranking_movement}</h2>
                    <h2>Race movement: {data.race_movement}</h2>
                </div>
                
            }            
        </div>
    )
    
}

export default PlayerDetail;