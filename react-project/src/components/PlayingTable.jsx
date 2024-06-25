import React from "react";
import "./PlayingTable.css";


export function PlayingTable({ athletes, chosenAthlete }) {    
    return (
        <table>
            {/*<button id="test-button-playing" onClick={play}>Test Button</button>*/}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Sport</th>
                    <th>Year</th>
                    <th>Sex</th>
                </tr>
            </thead>
            <tbody>
                {athletes.map((athlete, index) => (
                    <tr key={athlete.id}>
                        <td>{index + 1}</td>
                        <td style={{ color: athlete.name === chosenAthlete.name ? 'green' : 'red' }}>{athlete.name}</td>
                        <td style={{ color: athlete.country === chosenAthlete.country ? 'green' : 'red' }}>{athlete.country}</td>
                        <td style={{ color: athlete.sport === chosenAthlete.sport ? 'green' : 'red' }}>{athlete.sport}</td>
                        <td style={{ color: athlete.year === chosenAthlete.year ? 'green' : 'red' }}>{athlete.year}</td>
                        <td style={{ color: athlete.sex === chosenAthlete.sex ? 'green' : 'red' }}>{athlete.sex}</td>                    
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayingTable;