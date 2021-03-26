import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCharById, clearCharacter } from '../redux/ducks/charDetailsSlice';
import CharacterCard from './CharacterCard';

const CharacterDetails = () => {
  const { charId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, char, isError } = useSelector(
    (state) => state.characterDetails,
  );

  useEffect(() => {
    if (Object.keys(char).length === 0) {
      dispatch(getCharById(charId));
    }
    console.log(isLoading, isError);

    return () => {
      dispatch(clearCharacter());
    };
  }, []);

  return <div>{isLoading ? 'Loading....' : <CharacterCard char={char} />}</div>;
};

export default CharacterDetails;
