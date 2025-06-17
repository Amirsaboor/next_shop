'use client'
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

export default function Map() {
    useEffect(() => {

        const map = L.map('map').setView([36.316386, 59.585641], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);
        L.marker([36.316386, 59.585641], {
            icon: L.icon({
                popupAnchor: [12, 6],
                iconUrl: 'images/map/marker-icon.png',
                shadowUrl: 'images/map/marker-shadow.png',
            })
        }).addTo(map)
            .bindPopup('<b>Fast Food</b>').openPopup();
    }, []);

    return (
        <div id='map' style={{ height: '345px' }}></div>
    );
}
