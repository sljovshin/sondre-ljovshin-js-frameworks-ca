import React, {useState, useEffect} from 'react';
import GameDetails from './GameDetails';
import Loader from '../layout/Loader';
import {useParams} from "react-router-dom";


export default function Game() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}`)
        .then(res => res.json())
        .then(json => setData(json))
        .catch(()=> setData(null))
        .finally(()=> setLoading(false))
    }, []);




    return (
        <div className="page-wrapper">
        {loading ? <Loader /> : <GameDetails data={data} />}
    </div>
    )
}
