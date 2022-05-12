import { useEffect, useState } from 'react';

const useApi = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return [data, isLoading, error];
};

export default useApi;
