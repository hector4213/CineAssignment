import PropTypes from 'prop-types';

const CharacterListItem = ({ name }) => {
  return <li>{name}</li>;
};

CharacterListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CharacterListItem;
