import { Suspense, lazy, memo, useLayoutEffect, useMemo } from "react";

import GoogleMapReact from "google-map-react";
import { Outlet } from "react-router-dom";
import mapJson from "@data/map.json";
import sendAnalytics from "@utils/sendAnalytics";
import useQuery from "@utils/useQuery";

const MapPointer = lazy(() => import("@components/MapPointer"));

function Map() {
  useLayoutEffect(() => sendAnalytics("map"), []);

  const { data } = useQuery("/projects/all");

  const defaultProps = {
    center: {
      lat: 23.90515281847898,
      lng: 42.91250731552339,
    },
    zoom: 7,
  };

  const defaultPropsMobile = {
    center: {
      lat: 23.90515281847898,
      lng: 42.91250731552339,
    },
    zoom: 5,
  };

  const memoizedData = useMemo(
    () =>
      data?.filter(
        (project) =>
          project.coordinates.lat !== 0 && project.coordinates.lng !== 0
      ),
    [data]
  );

  return (
    <>
      <div className="top__header__black" />
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
          options={{
            styles: mapJson,
            backgroundColor: "#60b7e3",
          }}
          center={
            window.innerWidth > 700
              ? defaultProps.center
              : defaultPropsMobile.center
          }
          defaultZoom={
            window.innerWidth > 700
              ? defaultProps.zoom
              : defaultPropsMobile.zoom
          }
          onGoogleApiLoaded={({ map, maps }) => {
            map.setOptions({
              disableDefaultUI: true,
            });
          }}
        >
          {memoizedData?.map((project, index) => (
            <Suspense
              lat={project.coordinates.lat}
              lng={project.coordinates.lng}
            >
              <MapPointer
                key={index}
                lat={project.coordinates.lat}
                lng={project.coordinates.lng}
                project={project}
              />
            </Suspense>
          ))}
        </GoogleMapReact>
        <Outlet />
      </div>
    </>
  );
}

export default memo(Map);
