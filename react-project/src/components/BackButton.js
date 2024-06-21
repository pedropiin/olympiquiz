import React from "react";
import { Link } from 'react-router-dom';
import "./BackButton.css";

const BackButton = () => {
    return (
        <Link to={'/'}>
            <button className='back-button'>Back</button>
        </Link>
    )
}

export default BackButton;