import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterListItem from './CharacterListItem';
import { getIDFromUrl } from '../helpers/helpers';

const CharacterList = ({ charData }) => {
  return (
    <div>
      <ul>
        {charData.map((char) => (
          <Link
            key={getIDFromUrl(char.url)}
            to={`characters/${getIDFromUrl(char.url)}`}
          >
            <CharacterListItem name={char.name} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  charData: PropTypes.instanceOf(Array).isRequired,
};

export default CharacterList;
