import { useGeolocated } from "react-geolocated";
import { toast } from "react-hot-toast";

// Grab Location Information
export const getLocation = () => {
  try {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
        positionOptions: {
          enableHighAccuracy: true,
        },
        watchPosition: true,
        watchLocationPermissionChange: true,
      });

    if (!isGeolocationAvailable) {
      toast.error("Device does not have GPS", {
        id:"gps_unavailable"
      });
      throw new Error("Location is not available on this device!");
    }

    if (!isGeolocationEnabled) {
      toast.error("Location access blocked", {
        id:"gps_blocked",
        duration:2000
      });
      throw new Error("Location is not enabled!");
    }

    if (coords) {
      return { latitude: coords.latitude, longitude: coords.longitude, accuracy: coords.accuracy };
    }
  } catch (error) {
    console.log(error);
  }
};

// Conver to TitleCase
export const ToTitleCase = (value: string) => {
  const words = value.split(" ");

  const capitalizedWords = words.map((word) => {
    const lowercaseWord = word.toLowerCase();
    const firstLetterCapitalized = lowercaseWord.charAt(0).toUpperCase();
    const restOfWord = lowercaseWord.slice(1);

    return firstLetterCapitalized + restOfWord;
  });

  return capitalizedWords.join(" ");
};
