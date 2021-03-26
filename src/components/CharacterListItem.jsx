import PropTypes from 'prop-types';

const CharacterListItem = ({ character }) => {
  const { name, birth_year, height, mass } = character;
  return (
    <li>
      name:{name}
      BirthYear{birth_year}
      height{height}
      mass{mass}
    </li>
  );
};

CharacterListItem.propTypes = {
  character: PropTypes.instanceOf(Object).isRequired,
};

export default CharacterListItem;
