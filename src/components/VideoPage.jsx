import { useHistory } from 'react-router-dom';
import Video from './VideoPage/Video';

const VideoPage = () => {
  const history = useHistory();
  const goToApp = () => {
    history.push('/characters');
  };
  return (
    <div className="min-w-screen h-screen p-4 bg-black relative flex justify-center items-center">
      <Video />
      <button
        onClick={goToApp}
        className="absolute z-50 top-10 left-10 py-2 px-4 flex-shrink-0 bg-white focus:outline-none hover:bg-gray-200 text-black transition ease-in duration-200 text-center text-base font-semibold rounded-lg"
        type="button"
      >
        GO TO APP
      </button>
    </div>
  );
};

export default VideoPage;
