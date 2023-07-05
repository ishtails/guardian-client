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

// Conver to TitleCase
export const ToTitleCase = (value:string) => {
  const words = value.split(' ');

  const capitalizedWords = words.map((word) => {
    const lowercaseWord = word.toLowerCase();
    const firstLetterCapitalized = lowercaseWord.charAt(0).toUpperCase();
    const restOfWord = lowercaseWord.slice(1);

    return firstLetterCapitalized + restOfWord;
  });

  return capitalizedWords.join(' ');
};