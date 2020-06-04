import React, {useState, useEffect} from 'react';
import Heading from '../layout/Heading';
import HomeContent from './HomeContent';
import Loader from '../layout/Loader';

function Home() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.rawg.io/api/games')
        .then(res => res.json())
        .then(json => setData(json.results))
        .catch(setData(null))
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Heading title="Home" />
            <div className="page-wrapper">
                {loading ? <Loader /> : <HomeContent data={data} />}
            </div>
        </>
    )
}

export default Home;
