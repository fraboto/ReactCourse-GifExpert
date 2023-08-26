const GIF_URL =
  'https://api.giphy.com/v1/gifs/search?api_key=d6xZneejqYdXtQk9svFQbkuJM4b92R0S&limit=20&q=';

const getGifs = async (category) => {
  const url = GIF_URL + category;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifs;
};

export default getGifs;
