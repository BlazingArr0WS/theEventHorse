import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.location.lat, lng: props.location.lon }}
    >
      {props.location.isMarkerShown && (
        <Marker
          position={{ lat: props.location.lat, lng: props.location.lon }}
        />
      )}
    </GoogleMap>
  ))
);

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// import React from "react";
// import PropTypes from "prop-types";

// export const LocationMap = ({ location }) => {
//   return (
//     <GoogleMap
//       defaultZoom={location.zoom}
//       defaultCenter={{
//         lat: location.lat,
//         lng: location.lon
//       }}
//     >
//       <Marker position={{ lat: location.lat, lng: location.lon }} />
//     </GoogleMap>
//   );
// };

// export const Map = withScriptjs(withGoogleMap(LocationMap));

// LocationMap.propTypes = {
//   latitude: PropTypes.number,
//   longitude: PropTypes.number,
//   zoom: PropTypes.number,
//   coords: PropTypes.arrayOf(
//     PropTypes.shape({
//       latitude: PropTypes.number,
//       longitude: PropTypes.number
//     })
//   )
// };
