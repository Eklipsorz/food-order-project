import { useState, useCallback } from 'react';

const useHttp = () => {
  // define error state
  const [error, setError] = useState(null);
  // define isLoading state
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (options, handler) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(options.url, {
        method: options.method || 'GET',
        headers: options.headers || {},
        body: options.body ? JSON.stringify(options.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something went wrong!!');
      }

      const data = await response.json();
      handler(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return { error, isLoading, sendRequest };
};

export default useHttp;
