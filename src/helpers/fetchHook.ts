import axios from "axios";
import { useEffect } from "react";
import { useUserStore } from "../store/store";

const useFetch = (query: string) => {
  const {user, setUser,  isLoading, setIsLoading} = useUserStore();
  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      return;
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(query);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return {user, isLoading};
};

export default useFetch;
