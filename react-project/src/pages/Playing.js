import React from "react";
import playingImg from '../assets/playing.jpg';
import SearchBar from '../components/SearchBar';

const Playing = () => {
    return (
        <div className="playing-container">
            <img src={playingImg} alt="Playing" className="playing-image" />
            <SearchBar />
            <div className="attributes-text"><p>Name            Nationality          Sport          Year        Sex</p></div>
        </div>
    )
}

export default Playing;