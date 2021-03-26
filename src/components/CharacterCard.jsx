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
  } = char;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {height}
        {mass}
        {hair_color}
        {skin_color}
        {eye_color}
        {birth_year}
        {gender}
      </p>
    </div>
  );
};

CharacterCard.propTypes = {
  char: PropTypes.instanceOf(Object).isRequired,
};

export default CharacterCard;
