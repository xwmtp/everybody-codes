import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function CameraMarker(props) {
    return (
        <Marker position={[props.camera.latitude, props.camera.longitude]}>
            <Popup>
                {props.camera.number} {props.camera.name}
            </Popup>
        </Marker>
    )
}

function Map(props) {

    const markers = props.data.map((camera) => <CameraMarker key={camera.number} camera={camera} />)

    return (
        <div id="mapid">
            <MapContainer id="mapContainer" center={[52.0914, 5.1115]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
            </MapContainer>
        </div>
    );
}

export default Map;