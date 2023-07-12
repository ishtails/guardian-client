import axios from "axios";
import { useEffect } from "react";
import { useOutingStore } from "../store/store";

const useFetchOutings = (query: string, filt: Filter) => {
  const { outing, setOuting, isLoading, setIsLoading, filter } = useOutingStore();
  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(query, {
          params: { ...filter, ...filt },
        });
        setOuting(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query, filter]);

  return { outing, isLoading };
  
};

export default useFetchOutings;
