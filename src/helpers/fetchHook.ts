import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (query: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(query);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return {data, isLoading};
};

export default useFetch;
