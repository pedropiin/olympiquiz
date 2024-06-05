import React from "react";
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import BackButton from '../components/BackButton';


export const Playing = () => {
    return (
        <div className="container">
            <header className="header">
                <img src={playingImg} className="image" alt="OlympiQuiz" />
                <BackButton />
            </header>
            <main className="main">
                <PlayingTable />
            </main>
        </div>
    )
}