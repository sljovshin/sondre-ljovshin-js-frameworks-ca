import React from 'react';
import PropTypes from 'prop-types';

function GameCard({img, name, released, id, rating}) {

    const style = {
        coverImage: {
            backgroundImage: `url(${img})`,
        }
    };

    
    function favouriteCheck() {
        let game = [{
            id: id,
            background_image: img,
            released: released,
            name: name,
            rating: rating,
        }];
        console.log(game);
        
        if (typeof(Storage) !== "undefined") {
            let storagedata = JSON.parse(sessionStorage.getItem("fav")) ?? []
            if(findId(storagedata, id) !== true){
                storagedata.push(game[0]);
                sessionStorage.setItem("fav", JSON.stringify(storagedata))
            }
        } else {
            alert('Your browser does not support usage of localstorage')
        }
    }

    return (
        <div className="gameCard">
            <h3>{name}</h3>
            <div className="coverImage" style={style.coverImage}>
            </div>
            <p>Released {released}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Rating: {rating} / 5</p>
                <div className="learnMoreBt">
                    <a href={'game/'+id}>Learn More</a>
                </div>
            </div>
            <span>Favourite:</span>
            <input type="checkbox" onClick={favouriteCheck} />
        </div>
    );
}

function findId(obj, compare) {
    if(obj){
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].id === compare) {
                return true;
            }
        }
    }
    return false;
}

GameCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

export default GameCard;