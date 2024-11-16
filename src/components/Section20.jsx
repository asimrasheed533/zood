import GoogleMapReact from "google-map-react";
import MapPointer from "./MapPointer";
import mapJson from "@data/map.json";
import { memo } from "react";
import { useLocation } from "react-router-dom";

function Section20() {
  const { state } = useLocation();

  if (!state?.coordinates?.lat || !state?.coordinates?.lng) {
    return null;
  }

  const { lat, lng } = state.coordinates;

  const renderMapPointer = () => {
    if (lat && lng) {
      return <MapPointer lat={lat} lng={lng} project={state} />;
    }
    return null;
  };

  return (
    <div className="hateen__map" style={{ height: "80vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        options={{ styles: mapJson }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
        debounced={true}
      >
        {renderMapPointer()}
      </GoogleMapReact>
    </div>
  );
}

export default memo(Section20);
