export const fetchOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  },
};

export const videoOption = {
  method: 'GET',
  headers: {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY2,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  },
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
