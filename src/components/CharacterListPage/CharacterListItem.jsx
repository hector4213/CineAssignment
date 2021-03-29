import PropTypes from 'prop-types';
import R2D2 from '../../assets/r2-d2.png';

const CharacterListItem = ({ character }) => {
  const { name, birth_year, height, mass } = character;
  return (
    <li className="border-gray-400 flex flex-row mb-2">
      <div className="transition duration-500 shadow ease-in-out transform hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        <img className="w-10 h-10" src={R2D2} alt="char select logo" />
        <div className="flex w-full">
          <div className="text-sm p-2 md:flex-1">
            <span className="font-medium">Name:</span> {name}
          </div>
          <div className="text-sm p-2 md:flex-1">
            <span className="font-medium">Birth year:</span> {birth_year}
          </div>
          <div className="text-sm p-2 md:flex-1">
            <span className="font-medium">Height:</span> {height}
          </div>
          <div className="text-sm p-2 md:flex-1">
            <span className="font-medium">Mass:</span> {mass}
          </div>
        </div>
      </div>
    </li>
  );
};

CharacterListItem.propTypes = {
  character: PropTypes.instanceOf(Object).isRequired,
};

export default CharacterListItem;
