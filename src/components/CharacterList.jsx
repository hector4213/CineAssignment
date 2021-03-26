import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CharacterListItem from './CharacterListItem';
import { getIDFromUrl } from '../helpers/helpers';
import { goToPage } from '../redux/ducks/characterSlice';

const CharacterList = ({ charData, nextPage, prevPage }) => {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    if (!page) return;
    dispatch(goToPage(page));
  };

  return (
    <div>
      <ul>
        {charData.map((char) => (
          <Link
            key={getIDFromUrl(char.url)}
            to={`characters/${getIDFromUrl(char.url)}`}
          >
            <CharacterListItem character={char} />
          </Link>
        ))}
      </ul>
      <div style={{ display: 'flex' }}>
        <button onClick={() => handlePageChange(prevPage)} type="button">
          Prev
        </button>{' '}
        <button onClick={() => handlePageChange(nextPage)} type="button">
          Next
        </button>
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  charData: PropTypes.instanceOf(Array).isRequired,
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string.isRequired,
};

export default CharacterList;
