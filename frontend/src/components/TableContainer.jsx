import React from "react";
import CameraTable from "./CameraTable.jsx"

function TableContainer(props) {

    const column3Data = props.data.filter(camera => camera.number % 3 === 0)
    const column5Data = props.data.filter(camera => camera.number % 5 === 0)
    const column35Data = props.data.filter(camera => camera.number % 3 === 0 && camera.number % 5 === 0)
    const columnOverigData = props.data.filter(camera => camera.number % 3 !== 0 && camera.number % 5 !== 0)

    return (
        <table id="cameraTableContainer">
            <tbody>
                <tr>
                    <td>
                        <CameraTable name="3" data={column3Data} />
                    </td>
                    <td>
                        <CameraTable name="5" data={column5Data} />
                    </td>
                    <td>
                        <CameraTable name="3 &amp; 5" data={column35Data} />
                    </td>
                    <td>
                        <CameraTable name="Overig" data={columnOverigData} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableContainer;