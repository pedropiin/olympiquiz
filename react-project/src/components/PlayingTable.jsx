import React from "react";
import "./PlayingTable.css";

//So para testar
const athletes = [
    { id: 1, name: 'Michael Phelps', nationality: 'USA', sport: 'Swimming', year: 2012, sex: 'M' },
    { id: 2, name: 'Simone Biles', nationality: 'USA', sport: 'Gymnastics', year: 2016, sex: 'F' }
];

function PlayingTable() {
    return (
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
                {athletes.map((athlete, index) => (
                    <tr key={athlete.id}>
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
    )
}

export default PlayingTable;