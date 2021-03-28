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
    <>
      <div className="px-4 py-5 sm:px-6 w-full bg-gray-900 mb-2 rounded-lg shadow">
        <h3 className="text-lg leading-6 font-medium text-white border-gray-400 mb-2">
          Select a Character to view details
        </h3>
      </div>
      <ul className="flex flex-col">
        {charData.map((char) => (
          <Link
            key={getIDFromUrl(char.url)}
            to={`characters/${getIDFromUrl(char.url)}`}
          >
            <CharacterListItem character={char} />
          </Link>
        ))}
      </ul>
      <div className="flex justify-between">
        <button onClick={() => handlePageChange(prevPage)} type="button">
          Prev
        </button>{' '}
        <button onClick={() => handlePageChange(nextPage)} type="button">
          Next
        </button>
      </div>
    </>
  );
};

CharacterList.propTypes = {
  charData: PropTypes.instanceOf(Array).isRequired,
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string.isRequired,
};

export default CharacterList;
