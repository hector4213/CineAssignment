const baseURL = 'https://swapi.dev/api/people';

const getPeople = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

const getPersonById = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  const data = await response.json();
  return data;
};

const goToPage = async (prevOrNext) => {
  const response = await fetch(prevOrNext);
  const nextOrPrevPage = await response.json();
  return nextOrPrevPage;
};

export default {
  getPeople,
  getPersonById,
  goToPage,
};
