import { useState } from "react";

const useFetch = (url = "", action = (f) => f) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      action(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
