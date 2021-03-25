import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { charId } = useParams();

  useEffect(() => {
    console.log('mounted!');
  }, []);

  return <div>{charId}</div>;
};

export default CharacterDetails;
