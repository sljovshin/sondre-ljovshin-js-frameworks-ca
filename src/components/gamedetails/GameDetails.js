import React from 'react';
import Heading from '../layout/Heading';
import PropTypes from 'prop-types';


function getDetails(data) {
    if(data) {
        var html = data.description;
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }
}

function GameDetails({data}) {
    const style = {
        image: {
            backgroundImage: `url(${data.background_image})`,
        }
    };


    return (
        <div>
            <Heading title={data.name} />
            <div className="coverImage" style={style.image}></div>
            <h3>About the game:</h3>
            <p>{getDetails(data)}</p>
        </div>
    )
}

GameDetails.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GameDetails;