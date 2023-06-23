import { useGeolocated } from "react-geolocated";

// Grab Location Information
export const getLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
    });

    if(!isGeolocationAvailable) {
        return "Location is not available on this device!"
    }

    if(!isGeolocationEnabled) {
        return "Location is not enabled!"
    }

    if(coords){
        const location = { latitude: coords.latitude, longitude: coords.longitude }
        return (location)
    }
};