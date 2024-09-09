/** @import {Error} from "../docs" */

import { useEffect, useRef, useState } from "react";

import { useErrorId, useErrors } from "./";

/**
 * Custom hook to fetch data from the provided URL.
 *
 * @function
 * @param {string} url - URL to fetch data from.
 * @returns {{data: any, loading: boolean, error: Error, fetchData: function():Promise<void>}} Data, loading state, error and fetch function.
 */
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { throwError, getErrorById } = useErrors();
  const { errorId, setErrorId, resetErrorId } = useErrorId();
  const fetchInProcess = useRef(false);

  useEffect(() => {
    return () => {
      resetErrorId();
    };
  }, []);

  const fetchData = async () => {
    if (fetchInProcess.current) return;

    setLoading(true);
    fetchInProcess.current = true;

    resetErrorId();

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data from ${url}. HTTP status: ${response.status}`
        );
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      const generatedErrorId = throwError(error.message);
      setErrorId(generatedErrorId);
    } finally {
      setLoading(false);
      fetchInProcess.current = false;
    }
  };

  return {
    data,
    loading,
    error: errorId ? getErrorById(errorId) : null,
    fetchData,
  };
};
