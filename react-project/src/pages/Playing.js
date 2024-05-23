import React from "react";
import playingImg from '../assets/playingImg.jpg';

function Playing() {
    return (
        <div className="playing-container">
            <img src={playingImg} alt="Playing" className="playing-image" />
            <div className="attributes-text"><p>Name            Nationality          Sport          Year        Sex</p></div>
        </div>
    )
}

export default Playing;