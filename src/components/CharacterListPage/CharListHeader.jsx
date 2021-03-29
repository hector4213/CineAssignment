import PropTypes from 'prop-types';

const CharListHeader = ({ children }) => {
  return (
    <div className="px-4 py-5 sm:px-6 w-full bg-gray-900 mb-2 rounded-lg shadow">
      <h3 className="text-lg leading-6 font-medium text-white border-gray-400 mb-2">
        {children}
      </h3>
    </div>
  );
};

CharListHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CharListHeader;
