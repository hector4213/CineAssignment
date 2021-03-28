const baseURL = 'https://swapi.dev/api/people';

const getPeople = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

const getPersonById = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  const data = await response.json();

  // Fetches Homeworld
  const charHomeWorld = await fetch(data.homeworld);
  const homeWorld = await charHomeWorld.json();
  // Fetches Films
  const fetchFilms = data.films.map((filmUrl) => fetch(filmUrl));
  const filmPromises = await Promise.all(fetchFilms);
  const filmData = await Promise.all(filmPromises.map((res) => res.json()));

  // Fetch species

  const fetchSpecies = data.species.map((url) => fetch(url));
  const speciesPromises = await Promise.all(fetchSpecies);
  const speciesData = await Promise.all(
    speciesPromises.map((res) => res.json()),
  );

  // Fetch Vehicles
  const fetchVehicles = data.vehicles.map((url) => fetch(url));
  const vehiclePromises = await Promise.all(fetchVehicles);
  const vehicleData = await Promise.all(
    vehiclePromises.map((res) => res.json()),
  );

  // Fetch Starships

  const fetchStarships = data.starships.map((url) => fetch(url));
  const starshipPromises = await Promise.all(fetchStarships);
  const starshipData = await Promise.all(
    starshipPromises.map((res) => res.json()),
  );

  console.log(speciesData, filmData, vehicleData, starshipData);

  console.log(homeWorld);

  const test = {
    ...data,
    homeworld: homeWorld,
    species: speciesData,
    vehicles: vehicleData,
    starships: starshipData,
    films: filmData,
  };

  return test;
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
