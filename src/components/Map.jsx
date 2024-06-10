import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.polylinemeasure/Leaflet.PolylineMeasure.css';
import { Box } from '@chakra-ui/react';
import L from 'leaflet';
import 'leaflet.polylinemeasure';

// Fix for default icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const Map = () => {
  const position = [59.2916, 18.7169]; // Coordinates for Sollenkroka, Värmdö

  const PolylineMeasureControl = () => {
    const map = useMap();
    L.control.polylineMeasure({
      position: 'topleft',
      unit: 'metres',
      clearMeasurementsOnStop: false,
      showBearings: true,
      bearingTextIn: 'In',
      bearingTextOut: 'Out',
      tooltipTextFinish: 'Click to <b>finish line</b><br>',
      tooltipTextDelete: 'Press SHIFT-key and click to <b>delete point</b>',
      tooltipTextMove: 'Click and drag to <b>move point</b><br>',
      tooltipTextResume: '<br>Press CTRL-key and click to <b>resume line</b>',
      tooltipTextAdd: 'Press CTRL-key and click to <b>add point</b>',
      measureControlTitleOn: 'Turn on PolylineMeasure',
      measureControlTitleOff: 'Turn off PolylineMeasure',
      measureControlLabel: '&#8614;',
      measureControlClasses: [],
      showClearControl: true,
      clearControlTitle: 'Clear Measurements',
      clearControlLabel: '&times;',
      clearControlClasses: [],
      showUnitControl: true,
      unitControlTitle: {
        text: 'Change Units',
        metres: 'metres',
        landmiles: 'land miles',
        nauticalmiles: 'nautical miles'
      },
      unitControlLabel: {
        metres: 'm',
        kilometres: 'km',
        feet: 'ft',
        landmiles: 'mi',
        nauticalmiles: 'nm'
      },
      tempLine: {
        color: '#00f',
        weight: 2
      },
      fixedLine: {
        color: '#006',
        weight: 2
      },
      arrow: {
        color: '#000',
        weight: 2,
        fillColor: '#000',
        fillOpacity: 1,
        show: true,
        size: '8'
      },
      startCircle: {
        color: '#000',
        weight: 1,
        fillColor: '#0f0',
        fillOpacity: 1,
        radius: 3
      },
      intermedCircle: {
        color: '#000',
        weight: 1,
        fillColor: '#ff0',
        fillOpacity: 1,
        radius: 3
      },
      currentCircle: {
        color: '#000',
        weight: 1,
        fillColor: '#f0f',
        fillOpacity: 1,
        radius: 3
      },
      endCircle: {
        color: '#000',
        weight: 1,
        fillColor: '#f00',
        fillOpacity: 1,
        radius: 3
      }
    }).addTo(map);
    return null;
  };

  return (
    <Box height="500px" width="100%">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Sollenkroka, Värmdö - Starting point for kayaking trips.
          </Popup>
        </Marker>
        <PolylineMeasureControl />
      </MapContainer>
    </Box>
  );
};

export default Map;