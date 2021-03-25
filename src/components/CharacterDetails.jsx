import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { charId } = useParams();

  return <div>{charId}</div>;
};

export default CharacterDetails;
