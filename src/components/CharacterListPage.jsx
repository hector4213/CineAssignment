/* eslint react/forbid-prop-types: 0 */
/* eslint react/require-default-props: 0 */
import PropTypes from 'prop-types';
import CharacterList from './CharacterListPage/CharacterList';
import ListButtons from './CharacterListPage/ListButtons';
import CharListHeader from './CharacterListPage/CharListHeader';

const CharacterListPage = ({ charData, nextPage, prevPage }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-2">
      <CharListHeader>Select a Character to view details</CharListHeader>
      <CharacterList characters={charData} />
      <ListButtons prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

CharacterListPage.propTypes = {
  charData: PropTypes.instanceOf(Array).isRequired,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
};

export default CharacterListPage;
