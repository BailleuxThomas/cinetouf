import { useState, useEffect } from "react";
import api from "../../resources/api";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [data, updateData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await api.get(url);
      const result = response.data.data;
      updateData(result[0]);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return [data, isLoading];
};

export default useFetch;
