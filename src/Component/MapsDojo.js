import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

export default function MapsDojo() {
  // Position [Lat,Lng]
  const position = [-6.285290277546415, 106.9787338722417];
  // Pop Up Content
  const dojoName = "Aula Ibrahim";
  // Marker Costum
  const markerIcon = new L.Icon({
    iconUrl: require("../Assets/Images/marker.png"),
    iconSize: [26, 27],
  });
  // Map Size
  const mapStyles = {
    width: "100%",
    height: 160,
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={mapStyles}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=j7EvBpZRF5gMBEEp9ADt"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>{dojoName}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
