import React from 'react'
import GameCard from '../layout/GameCard';

function GameList({data}) {

    console.log(data);
    

    return (
        <div className="gameList-wrapper">
        {
          data !== null ? data.map((game) => {
              return <GameCard key={game.id} img={game.background_image} name={game.name} released={game.released} id={game.id} rating={game.rating} />
          }) : null
        }
        </div>
    );
}

export default GameList