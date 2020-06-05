import React, {useState, useEffect} from 'react';
import Heading from '../layout/Heading';
import GameList from '../layout/GameList';


function Favourites() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof(Storage) !== "undefined") {
            let storagedata = sessionStorage.getItem("fav")
            setData(JSON.parse(storagedata));
          } else {
            alert('Your browser does not support usage of localstorage')
          }
    }, []);

    return (
        <>
            <Heading title="Favourites"/>
            <div className="page-wrapper">
                <GameList data={data} />
            </div>
        </>
    )
}

export default Favourites

