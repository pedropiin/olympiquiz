import React from "react";
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import { Link } from 'react-router-dom';


export const Playing = () => {
    return (
        <div className="container">
            <header className="header">
                <img src={playingImg} className="image" alt="OlympiQuiz" />
                <Link to={'/'}>
                    <button className='back-button'>Back</button>
                </Link>
            </header>
            <main className="main">
                <PlayingTable />
            </main>
        </div>
    )
}