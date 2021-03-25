const baseURL = 'https://swapi.dev/api/people';

const getPeople = async () => {
  const response = await fetch(baseURL);
  const data = response.json();
  return data;
};

const getPersonById = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  const data = response.json();
  return data;
};

export default {
  getPeople,
  getPersonById,
};
