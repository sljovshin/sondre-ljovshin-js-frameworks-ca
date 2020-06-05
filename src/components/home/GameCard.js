import React from 'react';
import PropTypes from 'prop-types';

function GameCard({data}) {

    const style = {
        cardStyle: {
            border: `1px solid #${data.dominant_color}`,
        },
        coverImage: {
            backgroundImage: `url(${data.background_image})`,
        }
    };
    

    return (
        <div className="gameCard" style={style.cardStyle}>
            <h3>{data.name}</h3>
            <div className="coverImage" style={style.coverImage}>
            </div>
            <p>Released {data.released}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Rating: {data.rating} / 5</p>
                <div className="learnMoreBt">
                    <a href={'game/'+data.id}>Learn More</a>
                </div>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GameCard;