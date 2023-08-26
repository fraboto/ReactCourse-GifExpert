import { useEffect, useState } from 'react';
import getGifs from '../utils/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setGifs = async (category) => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    setGifs(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
