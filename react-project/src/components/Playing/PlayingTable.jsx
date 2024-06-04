import React from 'react';
import './PlayingTable.css';

function PlayingTable({ results }) {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Sport</th>
                        <th>Year</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((athlete, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{athlete.name}</td>
                            <td>{athlete.nationality}</td>
                            <td>{athlete.sport}</td>
                            <td>{athlete.year}</td>
                            <td>{athlete.sex}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayingTable;
