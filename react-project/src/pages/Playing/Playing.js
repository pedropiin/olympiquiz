import React from "react";
import playingImg from '../assets/playing.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';
import PlayingTable from "../../components/Playing/PlayingTable";

const Playing = () => {
    return (
        <div className="playing-container">
            <img src={playingImg} alt="Playing" className="playing-image" />
            <SearchBar />
            <PlayingTable />
        </div>
    )
}


export default Playing;