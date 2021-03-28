import PropTypes from 'prop-types';

const CharacterCard = ({ char }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    films,
    homeworld,
    species,
    starships,
    vehicles,
  } = char;

  if (Object.keys(char).length < 1) {
    return null;
  }

  return (
    <div className="p-3 flex flex-col shadow-lg rounded-lg bg-white flex-1">
      <h1 className="text-xl text-center p-4 md:text-5xl">{name}</h1>
      <div className="flex flex-col flex-1 justify-around md:flex md:flex-row md:justify-evenly md:flex-none">
        <p className="font-medium p-1 md:text-xl">
          Height: <span className="font-normal ">{height}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          Mass: <span className="font-normal">{mass}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          Hair: <span className="font-normal">{hair_color}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          Skin: <span className="font-normal">{skin_color}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          Eye Color: <span className="font-normal">{eye_color}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          YOB: <span className="font-normal">{birth_year}</span>
        </p>
        <p className="font-medium p-1 md:text-xl">
          Gender: <span className="font-normal">{gender}</span>
        </p>
      </div>
      <div className="md:flex flex-col flex-1 justify-evenly ">
        <div className="bg-gray-900 shadow-lg text-white  rounded-2xl mb-1 p-4 font-medium p-1 md:text-xl">
          Films:{' '}
          {films.map((film) => (
            <span className="font-normal text-white-500">{`${film.title}, `}</span>
          ))}
        </div>
        <div className="bg-gray-900 shadow-lg text-white  rounded-2xl mb-1 p-4 font-medium p-1 md:text-xl">
          Homeworld: <span className="font-normal">{homeworld.name}</span>
        </div>
        <div className="bg-gray-900 shadow-lg text-white  rounded-2xl mb-1 p-4 font-medium p-1 md:text-xl">
          Species:{' '}
          {species.length < 1 ? (
            <span className="font-normal p-1 md:text-xl">Unknown</span>
          ) : (
            species.map((spec) => (
              <span className="font-normal p-1 md:text-xl">{spec.name}</span>
            ))
          )}
        </div>
        <div className="bg-gray-900 shadow-lg text-white  rounded-2xl mb-1 p-4 font-medium p-1 md:text-xl">
          Starships:{' '}
          {starships.length < 1 ? (
            <span className="font-normal">None</span>
          ) : (
            starships.map((ship) => (
              <span className="font-normal p-1 md:text-xl">{`${ship.name}, `}</span>
            ))
          )}
        </div>
        <div className="bg-gray-900 shadow-lg text-white  rounded-2xl mb-1 p-4 font-medium p-1 md:text-xl">
          Vehicles :{' '}
          {vehicles.length < 1 ? (
            <span className="font-normal p-1 md:text-xl">None</span>
          ) : (
            vehicles.map((veh) => (
              <span className="font-normal p-1 md:text-xl">{`${veh.name}, `}</span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  char: PropTypes.instanceOf(Object).isRequired,
};

export default CharacterCard;
