import React from 'react'
import GameCard from './GameCard';

function HomeContent({data}) {

    console.log(data);
    

    return (
        <div className="homecontent-wrapper">
        {
          data !== null ? data.map((game) => {
              return <GameCard key={game.id} data={game} />
          }) : null
        }
        </div>
    );
}

export default HomeContent
