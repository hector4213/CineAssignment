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
    <div className="min-w-full h-5/6 p-3 flex flex-col shadow-lg rounded-lg ">
      <h1 className="text-xl text-center p-4">{name}</h1>
      <div className="md:flex justify-evenly">
        <p className="font-medium p-1">
          Height: <span className="font-normal">{height}</span>
        </p>
        <p className="font-medium p-1">
          Mass: <span className="font-normal">{mass}</span>
        </p>
        <p className="font-medium p-1">
          Hair: <span className="font-normal">{hair_color}</span>
        </p>
        <p className="font-medium p-1">
          Skin: <span className="font-normal">{skin_color}</span>
        </p>
        <p className="font-medium p-1">
          Eye Color: <span className="font-normal">{eye_color}</span>
        </p>
        <p className="font-medium p-1">
          YOB: <span className="font-normal">{birth_year}</span>
        </p>
        <p className="font-medium p-1">
          Gender: <span className="font-normal">{gender}</span>
        </p>
      </div>
      <div className="font-medium p-1">
        Films:{' '}
        {films.map((film) => (
          <span className=" text-gray-500">{`${film.title}, `}</span>
        ))}
      </div>
      <div className="font-medium p-1">
        Homeworld: <span className="font-normal">{homeworld.name}</span>
      </div>
      <div className="font-medium p-1">
        Species:{' '}
        {species.length < 1 ? (
          <span className="font-normal p-1">Unknown</span>
        ) : (
          species.map((spec) => (
            <span className="font-normal p-1">{spec.name}</span>
          ))
        )}
      </div>
      <div className="font-medium p-1">
        Starships:{' '}
        {starships.length < 1 ? (
          <span className="font-normal">None</span>
        ) : (
          starships.map((ship) => (
            <span className="font-normal p-1">{`${ship.name}, `}</span>
          ))
        )}
      </div>
      <div className="font-medium p-1">
        Vehicles :{' '}
        {vehicles.length < 1 ? (
          <span className="font-normal p-1">None</span>
        ) : (
          vehicles.map((veh) => (
            <span className="font-normal p-1">{`${veh.name}, `}</span>
          ))
        )}
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  char: PropTypes.instanceOf(Object).isRequired,
};

export default CharacterCard;
