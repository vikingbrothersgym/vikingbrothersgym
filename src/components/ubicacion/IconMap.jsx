import L from "leaflet";
import logo from "@assets/iconmap.png"

const IconMap = L.icon({
    iconUrl: logo,
    iconRetinaUrl: logo,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 30],
    className: "Leaflet-venue-icon"
})

export default IconMap