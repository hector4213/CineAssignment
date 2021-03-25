import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/ducks/characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();
  const { results, isLoading, isError } = useSelector(
    (state) => state.characters,
  );

  useEffect(() => {
    dispatch(fetchCharacters());
    console.log({ results, isLoading, isError });
  }, []);

  return <div>Im a CharacterList</div>;
};

export default CharacterList;
