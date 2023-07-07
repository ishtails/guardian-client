import axios from "axios";
import { useEffect } from "react";
import { useOutingStore } from "../store/store";

type Filters = {
  startDate?: string,
  endDate?: string,
  isOpen?: boolean,
  username?: string,
  reason?: string,
  isLate?: boolean,
}

const useFetchOutings = (query: string) => {
  const { outing, setOuting, isLoading, setIsLoading, filter } = useOutingStore();
  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(query, { params: filter });
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
