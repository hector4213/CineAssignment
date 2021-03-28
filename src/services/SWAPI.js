const baseURL = 'https://swapi.dev/api/people';

// This gets used during primary character fetching API call
const getHomeWorld = async (url) => {
  const response = await fetch(url);
  const homeWorldData = response.json();
  return homeWorldData;
};

// Function to fetch the nested data in the original character response
const getMultiProps = async (urlArray) => {
  const promiseUrls = urlArray.map((url) => fetch(url));
  const promiseArray = await Promise.all(promiseUrls);
  const resData = await Promise.all(promiseArray.map((res) => res.json()));
  return resData;
};

const getPeople = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

const getPersonById = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  const data = await response.json();

  const { homeworld, films, species, vehicles, starships } = data;

  // Fetch Homeworld

  const homeWorld = await getHomeWorld(homeworld);

  // Fetch Films
  const filmData = await getMultiProps(films);

  // Fetch species
  const speciesData = await getMultiProps(species);

  // Fetch Vehicles
  const vehicleData = await getMultiProps(vehicles);

  // Fetch Starships
  const starshipData = await getMultiProps(starships);

  const completeData = {
    ...data,
    homeworld: homeWorld,
    species: speciesData,
    vehicles: vehicleData,
    starships: starshipData,
    films: filmData,
  };

  return completeData;
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
