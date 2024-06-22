import React from "react";
import "./PlayingTable.css";


export function PlayingTable({ athletes }) {
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
                        <td>{athlete.name}</td>
                        <td>{athlete.country}</td>
                        <td>{athlete.sport}</td>
                        <td>{athlete.year}</td>
                        <td>{athlete.sex}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayingTable;