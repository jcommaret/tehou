import {useState, useCallback} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Geolocation } from '@capacitor/geolocation';

import "./App.css";

function App(){
  const [loc, setLoc] = useState(null);
  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []
);

  return(
    <>
      <div id="map">
      <MapContainer center={[48.69838713987885, 2.203]} zoom={24} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.698, 2.203]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      <div>
        <h1>Geolocation</h1>
        <p>Your location is:</p>
        <p>Latitude: {loc?.coords.latitude}</p>
        <p>Longitude: {loc?.coords.longitude}</p>

        <button onClick={getCurrentPosition}>
          Get Current Location
        </button>

      </div>
      
      
      </>
      
  )
}

export default App
