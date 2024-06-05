import React from "react";
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";

export const Playing = () => {
    return (
        <div className="container">
            <header className="header">
                <img src={playingImg} className="image" alt="OlympiQuiz" />
            </header>
            <main>
                <PlayingTable />
            </main>
        </div>
    )
}