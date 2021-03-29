import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCharById, clearCharacter } from '../redux/ducks/charDetailsSlice';
import CharacterCard from './CharacterDetails/CharacterCard';
import Loader from './shared/Loader';

const CharacterDetails = () => {
  const { charId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, char } = useSelector((state) => state.characterDetails);

  useEffect(() => {
    if (Object.keys(char).length === 0) {
      dispatch(getCharById(charId));
    }

    return () => {
      dispatch(clearCharacter());
    };
  }, []);

  return (
    <div className="min-h-screen p-3 flex flex-col">
      {isLoading ? <Loader /> : <CharacterCard char={char} />}
      <div>
        <button
          className="py-2 px-4  bg-gray-900 hover:bg-gray-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          type="button"
          onClick={() => history.push('/characters')}
        >
          Back to list
        </button>
      </div>
    </div>
  );
};

export default CharacterDetails;
