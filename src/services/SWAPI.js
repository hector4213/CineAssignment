const baseURL = 'https://swapi.dev/api/people';

const getPeople = async () => {
  const response = await fetch(baseURL);
  const data = response.json();
  return data;
};

export default {
  getPeople,
};
