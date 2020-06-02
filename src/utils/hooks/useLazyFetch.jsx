import { useState, useEffect } from "react";
import api from "../../resources/api";

const useLazyFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    setLoading(true);
    const response = await api.get(url);
    const result = response.data.data;
    setData(result[0]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetchData, { loading: isLoading, data: data }];
};

export default useLazyFetch;
