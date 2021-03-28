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
    <div className="min-h-screen flex flex-col justify-between p-2">
      <div className="px-4 py-5 sm:px-6 w-full bg-gray-900 mb-2 rounded-lg shadow">
        <h3 className="text-lg leading-6 font-medium text-white border-gray-400 mb-2">
          Select a Character to view details
        </h3>
      </div>
      <ul className="flex-1">
        {charData.map((char) => (
          <Link
            key={getIDFromUrl(char.url)}
            to={`characters/${getIDFromUrl(char.url)}`}
          >
            <CharacterListItem character={char} />
          </Link>
        ))}
      </ul>
      <div className="flex justify-between space-x-2">
        <button
          className="py-2 px-4 bg-gray-900 hover:bg-gray-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          onClick={() => handlePageChange(prevPage)}
          type="button"
        >
          Prev
        </button>{' '}
        <button
          className="py-2 px-4 bg-gray-900 hover:bg-gray-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          onClick={() => handlePageChange(nextPage)}
          type="button"
        >
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
