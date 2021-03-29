import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getPageNum } from '../../helpers/helpers';
import { goToPage } from '../../redux/ducks/characterSlice';

const ListButtons = ({ prevPage, nextPage }) => {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    if (!page) return;
    dispatch(goToPage(page));
  };

  return (
    <div className="flex justify-between space-x-2">
      <button
        className="py-2 px-4 bg-gray-900 focus:outline-none hover:bg-gray-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg disabled:opacity-50"
        onClick={() => handlePageChange(prevPage)}
        type="button"
        disabled={!prevPage && true}
      >
        Prev
      </button>{' '}
      <span className="py-2 px-4 bg-gray-900 text-white rounded-lg">
        {getPageNum(nextPage, prevPage)}
      </span>
      <button
        className="py-2 px-4 bg-gray-900 focus:outline-none hover:bg-gray-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg disabled:opacity-50"
        onClick={() => handlePageChange(nextPage)}
        type="button"
        disabled={!nextPage && true}
      >
        Next
      </button>
    </div>
  );
};

ListButtons.propTypes = {
  nextPage: PropTypes.string.isRequired,
  prevPage: PropTypes.string.isRequired,
};

export default ListButtons;
