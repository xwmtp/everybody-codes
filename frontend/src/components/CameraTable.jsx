import React from "react";

function CameraTable(props) {

    const rows = props.data.map(camera => {
        return (
            <tr key={camera.number}>
                <td>{camera.number}</td>
                <td>{camera.name}</td>
                <td>{camera.latitude}</td>
                <td>{camera.longitude}</td>
            </tr>
        );
    });

    return (
        <table id={`column${props.name}`}>
            <thead>
                <tr>
                    <th colSpan="4">Cameras {props.name}</th>
                </tr>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default CameraTable;