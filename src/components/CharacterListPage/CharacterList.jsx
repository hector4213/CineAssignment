import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterListItem from './CharacterListItem';
import { getIDFromUrl } from '../../helpers/helpers';

const CharacterList = ({ characters }) => {
  return (
    <ul className="flex-1">
      {characters.map((char) => (
        <Link
          key={getIDFromUrl(char.url)}
          to={`characters/${getIDFromUrl(char.url)}`}
        >
          <CharacterListItem character={char} />
        </Link>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.instanceOf(Array).isRequired,
};

export default CharacterList;
