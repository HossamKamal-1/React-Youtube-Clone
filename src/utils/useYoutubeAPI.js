import { CanceledError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { fetchYoutubeAPI } from './fetchFromAPI';

const useYoutubeAPI = (endPointURL, queryParams) => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef();
  useEffect(() => {
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    async function executeFetchYoutubeAPI() {
      setIsLoading(true);
      setError('');
      try {
        const data = await fetchYoutubeAPI(
          endPointURL,
          queryParams,
          abortController.signal
        );
        setIsLoading(false);
        setVideos(data.items);
      } catch (e) {
        setIsLoading(false);
        console.log('error', e);
        if (e instanceof CanceledError === false) {
          console.log(e);
          setError(e.data?.message || e.message);
        } else {
          setIsLoading(true);
        }
      }
    }
    executeFetchYoutubeAPI();
  }, [queryParams, endPointURL]);
  useEffect(
    () => () => {
      console.log('unmount');
      abortControllerRef.current.abort('component unmount');
    },
    []
  );
  return [videos, isLoading, error];
};
export default useYoutubeAPI;
